import React, { useState, useEffect } from "react";
import { cloneDeep, get, isEmpty, isEqual, isEqualWith, isNil, keys, set, unset } from "lodash";

/**
 * use-form-linker emulates all the properties and methods of the
 * FormLinker class (https://www.npmjs.com/package/form-linker) using
 * React hooks to create a custom hook usable with functional components.
 * The benefit is that it ties the form-state in with the component's state
 * so the current form state is always rendered correctly on the screen without
 * resorting to forceUpdate or duplicating data in formlinker and in state.
 * The interface remains the same, so child components won't know the difference.
 */

const useFormLinker = (config = {}) => {
  const initialData = config.data || {};
  const initialSchema = config.schema || {};
  const [originalData, setOriginalData] = useState();
  const [fields, setFields] = useState(calcFields(initialSchema));
  const [schema, setSchema] = useState(initialSchema);
  const [data, setData] = useState({});
  const [parsedData, setParsedData] = useState(initialData);
  const [formErrors, setFormErrors] = useState({});

  const converters = config.converters || {};
  const formatters = config.formatters || {};
  const masks = config.masks || {};

  useEffect(() => {
    setOriginalData(initialData);
    setValuesFromParsed(initialData);
  }, []);

  function calcFields(schema, prefix = "", newFields = []) {
    keys(schema).forEach((key) => {
      if(typeof schema[key] === "object") {
        calcFields(schema[key], prefix + key + ".", newFields);
      } else {
        newFields.push(prefix + key);
      }
    });
    return(newFields);
  }

  /**
   * FORMATTING HELPER FUNCTIONS
   */

  function convert(fieldName, value) {
    const key = get(schema, fieldName) || "";
    return(key.split(".").reduce((converted, converter) => {
      if(isNil(converters[converter])) { return(converted); }
      return(converters[converter](value));
    }, value));
  }

  function format(fieldName, value) {
    const key = get(schema, fieldName) || "";
    return(key.split(".").reduce((response, formatter) => {
      if(isNil(formatters[formatter])) { return(response); }
      return(formatters[formatter](response));
    }, {errors: [], formatted: value, parsed: value, valid: true}));
  }

  function mask(fieldName, value) {
    const key = get(schema, fieldName) || "";
    return(key.split(".").reduce((response, mask) => {
      if(isNil(masks[mask])) { return response; }
      return(masks[mask].mask(value));
    }, value));
  }

  /**
   * ERRORS
   */

  function getError(fieldName) {
    return(get(formErrors, fieldName) || []);
  }

  function setError(fieldName, newErrors) {
    setFormErrors(formErrors => {
      if(isEmpty(newErrors)) {
        const nextErrors = cloneDeep(formErrors);
        unset(nextErrors, fieldName);
        if(fieldName.includes(".")) {
          let currentPath = fieldName.slice(0, fieldName.lastIndexOf("."));
          while(currentPath) {
            if(isEmpty(get(nextErrors, currentPath))) {
              unset(nextErrors, currentPath);
              currentPath = currentPath.slice(0, currentPath.lastIndexOf("."));
            } else {
              break;
            }
          }
        }
        return(nextErrors);
      } else {
        const nextErrors = set({}, fieldName, newErrors);
        return({...formErrors, ...nextErrors});
      }
    });
  }

  function getErrors() {
    return(formErrors);
  }

  function setErrors(newErrors) {
    setFormErrors(newErrors);
  }

  /**
   * VALUES
   */

  function getValue(fieldName) {
    return(get(data, fieldName));
  }

  function setValue(fieldName, value) {
    const nextData = set({}, fieldName, mask(fieldName, value));
    const {errors, parsed} = format(fieldName, value);
    const nextParsedData = set({}, fieldName, parsed);
    setData(data => ({...data, ...nextData}));
    setParsedData(parsedData => ({...parsedData, ...nextParsedData}));
    if(isEmpty(errors) && !isEmpty(get(formErrors, fieldName))) { setError(fieldName, []); }
  }

  function getValues() {
    return(data);
  }

  function setValues(values) {
    const nextData = {};
    const nextParsedData = {};
    fields.forEach((fieldName) => {
      const value = get(values, fieldName);
      if(typeof value !== "undefined") {
        set(nextData, fieldName, mask(fieldName, value));
        set(nextParsedData, fieldName, format(fieldName, value).parsed);
      }
    });
    setData(nextData);
    setParsedData(nextParsedData);
  }

  function setValuesFromParsed(values) {
    const nextData = {};
    fields.forEach((fieldName) => {
      const value = get(values, fieldName);
      if(typeof value !== "undefined") {
        set(nextData, fieldName, convert(fieldName, value));
      }
    });
    setData(data => ({...data, ...nextData}));
  }

  /**
   * VALIDATION
   */

  function isValid() {
    let flag = true;
    for(let i = 0; i < fields.length; i++) {
      const {valid} = format(fields[i], getValue(fields[i]));
      if(valid === false) {
        flag = false;
        break;
      }
    }
    return(flag);
  }

  function validate(fieldName) {
    const {errors, formatted, parsed} = format(fieldName, getValue(fieldName));
    setError(fieldName, errors);
    const nextData = set({}, fieldName, formatted);
    setData(data => ({...data, ...nextData}));
    const nextParsed = set({}, fieldName, parsed);
    setParsedData(parsedData => ({...parsedData, ...nextParsed}));
  }

  function validateAll() {
    const nextErrors = {};
    const nextData = {};
    const nextParsedData = {};
    fields.forEach((field) => {
      const {errors, formatted, parsed} = format(field, getValue(field));
      set(nextErrors, field, errors);
      set(nextData, field, formatted);
      set(nextParsedData, field, parsed);
    });
    setFormErrors(nextErrors);
    setData(nextData);
    setParsedData(nextParsedData);
  }

  /**
   * DIFFERENCES
   */

  function extractDifferences(original) {
    const differences = {};
    fields.forEach((field) => {
      if((isNil(get(original, field)) || get(original, field) === "") && (isNil(get(parsedData, field)) || get(parsedData, field) === "")) {
        // do nothing
      } else if(!isEqual(get(original, field), get(parsedData, field))) {
        set(differences, field, get(parsedData, field));
      }
    });
    return(differences);
  }

  /**
   * SCHEMA
   */

  function updateSchema(newSchema = {}) {
    setSchema(newSchema);
    setFields(calcFields(newSchema));
    validateAll();
    setFormErrors({});
  }

  /**
   * RETURN OBJECT: containing state and functions with the same interface as the FormLinker class from "form-linker".
   */

  return({
    data,
    parsedData,
    originalData,
    schema,
    errors: formErrors,
    fields,
    calcFields: () => setFields(calcFields(schema)),
    convert,
    format,
    mask,
    getError,
    getErrors,
    setError,
    setErrors,
    getValue,
    getValues,
    setValue,
    setValues,
    setValuesFromParsed,
    isValid,
    validate,
    validateAll,
    extractDifferences,
    updateSchema,
    arePropsEqual,
  });
};

export default useFormLinker;

/**
 * Functions to help with shouldComponentUpdate or React.memo
 *
 * FormLinker or useFormLinker are useful for handling forms but can result in terrible performance
 * bacause a change anywhere in the form causes a rerender of everything in the form. To optimize
 * responsiveness of forms to user input it's important to minimize the amount of rerendering using
 * shouldComponentUpdate (or React.memo for functional component).
 *
 * Having FormLinker/useFormLinker in the props causes the props-nextProps comparison to always return as
 * having changes even if nothing changed for a particular Field, so the comparison needs to be handled manually.
 * arePropsEqual returns a boolean for whether props and nextProps are equal for a given fieldName in the form.
 */

function isFLEqual(currentFormLinker, nextFormLinker, fieldName) {
  return(
    isEqualWith(currentFormLinker, nextFormLinker, (val1, val2, key) => {
      // only consider data or errors to have changed if the changed value is for the current Field
      if(key === "data") {
        if(val1[fieldName] !== val2[fieldName]) { return(false); }
        return(true);
      }
      if(key === "errors") {
        if(isNil(val1[fieldName]) && isNil(val2[fieldName])) { return(true); }
        if(val1[fieldName] !== val2[fieldName]) { return(false); }
        return(true);
      }
      // changes to formLinker fields or functions other than data & errors should not trigger a rerender so consider them equal
      if(!isNil(key)) { return(true); }
    })
  );
};

export function arePropsEqual(props, nextProps, fieldName) {
  return(
    isEqualWith(props, nextProps, (val1, val2, key) => {
      // formLinker will always cause the props to change, so handle the comparison manually
      if(key === "formLinker") { return(isFLEqual(props.formLinker, nextProps.formLinker, fieldName)); }
      // for all other props just make the usual shallow comparison
      if(!isNil(key) && val1 !== val2) { return(false); }
    })
  );
};
