import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const calcFields = useCallback(function(schema, prefix = "", newFields = []) {
    keys(schema).forEach((key) => {
      if(typeof schema[key] === "object") {
        calcFields(schema[key], prefix + key + ".", newFields);
      } else {
        newFields.push(prefix + key);
      }
    });
    return(newFields);
  }, []);

  const initialData = useRef(config.data || {});
  const initialSchema = config.schema || {};
  const [fields, setFields] = useState(calcFields(initialSchema));
  const [schema, setSchema] = useState(initialSchema);
  const [state, setState] = useState({
    data: {},
    parsedData: initialData.current,
    errors: {}
  });

  const converters = useRef(config.converters || {});
  const formatters = useRef(config.formatters || {});
  const masks = useRef(config.masks || {});

  /**
   * FORMATTING HELPER FUNCTIONS
   */

  const convert = useCallback(function(fieldName, value) {
    const key = get(schema, fieldName) || "";
    return(key.split(".").reduce((converted, converter) => {
      if(isNil(converters.current[converter])) { return(converted); }
      return(converters.current[converter](value));
    }, value));
  }, [schema]);

  const format = useCallback(function(fieldName, value) {
    const key = get(schema, fieldName) || "";
    return(key.split(".").reduce((response, formatter) => {
      if(isNil(formatters.current[formatter])) { return(response); }
      return(formatters.current[formatter](response));
    }, {errors: [], formatted: value, parsed: value, valid: true}));
  }, [schema]);

  const mask = useCallback(function(fieldName, value) {
    const key = get(schema, fieldName) || "";
    return(key.split(".").reduce((response, mask) => {
      if(isNil(masks.current[mask])) { return response; }
      return(masks.current[mask].mask(value));
    }, value));
  }, [schema]);

  /**
   * ERRORS
   */

  const calculateErrorsForState = useCallback(function(fieldName, newErrors, state) {
    if(isEqual(get(state.errors, fieldName), newErrors)) {
      return(state);
    } else if(isEmpty(newErrors)) {
      const nextErrors = cloneDeep(state.errors);
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
      return({
        ...state,
        errors: nextErrors
      });
    } else {
      const nextErrors = set({}, fieldName, newErrors);
      return({
        ...state,
        errors: {...state.errors, ...nextErrors}
      });
    }
  }, []);

  const getError = useCallback(function(fieldName) {
    return(get(state.errors, fieldName) || []);
  }, [state.errors]);

  const setError = useCallback(function(fieldName, newErrors) {
    setState(state => {
      const current = get(state, fieldName);
      if(isEqual(current, newErrors)) {
        return(state);
      } else {
        return(calculateErrorsForState(fieldName, newErrors, state));
      }
    });
  }, [calculateErrorsForState]);

  const getErrors = useCallback(function() {
    return(state.errors);
  }, [state.errors]);

  const setErrors = useCallback(function(newErrors) {
    setState(state => {
      if(isEqual(state.errors, newErrors)) {
        return(state);
      } else {
        return({
          ...state,
          errors: newErrors
        });
      }
    });
  }, []);

  /**
   * VALUES
   */

  const getValue = useCallback(function(fieldName) {
    return(get(state.data, fieldName));
  }, [state.data]);

  const setValue = useCallback(function(fieldName, value) {
    setState(state => {
      if(isEqual(get(state.data, fieldName), value)) {
        return(state);
      } else {
        const nextData = set({}, fieldName, mask(fieldName, value));
        const nextParsedData = set({}, fieldName, format(fieldName, value).parsed);
        return({
          ...state,
          data: {...state.data, ...nextData},
          parsedData: {...state.parsedData, ...nextParsedData}
        });
      }
    });
  }, [format, mask]);

  const getValues = useCallback(function() {
    return(state.data);
  }, [state.data]);

  const setValues = useCallback(function(values) {
    const nextData = {};
    const nextParsedData = {};
    fields.forEach((fieldName) => {
      const value = get(values, fieldName);
      if(typeof value !== "undefined") {
        set(nextData, fieldName, mask(fieldName, value));
        set(nextParsedData, fieldName, format(fieldName, value).parsed);
      }
    });
    setState(state => {
      if(isEqual(state.data, nextData)) {
        return(state);
      } else {
        return({
          ...state,
          data: nextData,
          parsedData: nextParsedData
        });
      }
    });
  }, [fields, format, mask]);

  const setValuesFromParsed = useCallback(function(values) {
    const nextData = {};
    fields.forEach((fieldName) => {
      const value = get(values, fieldName);
      if(typeof value !== "undefined") {
        set(nextData, fieldName, convert(fieldName, value));
      }
    });
    setState(state => ({
      ...state,
      data: {...state.data, ...nextData}
    }));
  }, [convert, fields]);

  useEffect(() => {
    setValuesFromParsed(initialData.current);
  }, [setValuesFromParsed]);

  /**
   * VALIDATION
   */

  const isValid = useCallback(function() {
    let flag = true;
    for(let i = 0; i < fields.length; i++) {
      const {valid} = format(fields[i], getValue(fields[i]));
      if(valid === false) {
        flag = false;
        break;
      }
    }
    return(flag);
  }, [fields, format, getValue]);

  const validate = useCallback(function(fieldName) {
    setState(state => {
      const {errors, formatted, parsed} = format(fieldName, get(state.data, fieldName));
      const nextData = set({}, fieldName, formatted);
      const nextParsedData = set({}, fieldName, parsed);
      const newState = {
        ...state,
        data: {...state.data, ...nextData},
        parsedData: {...state.parsedData, ...nextParsedData}
      };
      if(isEqual(get(state.errors, fieldName), errors) && isEqual(state, newState)) {
        return(state);
      } else {
        return(calculateErrorsForState(fieldName, errors, newState));
      }
    });
  }, [calculateErrorsForState, format]);

  const validateAll = useCallback(function() {
    setState(state => {
      const nextErrors = {};
      const nextData = {};
      const nextParsedData = {};
      fields.forEach(field => {
        const {errors, formatted, parsed} = format(field, get(state.data, field));
        set(nextData, field, formatted);
        set(nextParsedData, field, parsed);
        if(!isEmpty(errors)) { set(nextErrors, field, errors); }
      });
      const nextState = {
        data: nextData,
        parsedData: nextParsedData,
        errors: nextErrors,
      };
      if(isEqual(state, nextState)) {
        return(state);
      } else {
        return(nextState);
      }
    });
  }, [fields, format]);

  /**
   * DIFFERENCES
   */

  const extractDifferences = useCallback(function(original) {
    const differences = {};
    fields.forEach((field) => {
      if((isNil(get(original, field)) || get(original, field) === "") && (isNil(get(state.parsedData, field)) || get(state.parsedData, field) === "")) {
        // do nothing
      } else if(!isEqual(get(original, field), get(state.parsedData, field))) {
        set(differences, field, get(state.parsedData, field));
      }
    });
    return(differences);
  }, [fields, state.parsedData]);

  /**
   * SCHEMA
   */

  const updateSchema = useCallback(function(newSchema = {}) {
    setSchema(newSchema);
    setFields(calcFields(newSchema));
    validateAll();
    setErrors({});
  }, [calcFields, setErrors, validateAll]);

  /**
   * RETURN OBJECT: containing state and functions with the same interface as the FormLinker class from "form-linker".
   */

  return({
    data: state.data,
    parsedData: state.parsedData,
    errors: state.errors,
    originalData: initialData.current,
    schema,
    fields,
    calcFields: useCallback(() => setFields(calcFields(schema)), [calcFields, schema]),
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
