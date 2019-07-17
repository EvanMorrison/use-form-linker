"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arePropsEqual = arePropsEqual;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * use-form-linker emulates all the properties and methods of the
 * FormLinker class (https://www.npmjs.com/package/form-linker) using
 * React hooks to create a custom hook usable with functional components.
 * The benefit is that it ties the form-state in with the component's state
 * so the current form state is always rendered correctly on the screen without
 * resorting to forceUpdate or duplicating data in formlinker and in state.
 * The interface remains the same, so child components won't know the difference.
 */
var useFormLinker = function useFormLinker() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var initialData = config.data || {};
  var initialSchema = config.schema || {};

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      originalData = _useState2[0],
      setOriginalData = _useState2[1];

  var _useState3 = (0, _react.useState)(_calcFields(initialSchema)),
      _useState4 = _slicedToArray(_useState3, 2),
      fields = _useState4[0],
      setFields = _useState4[1];

  var _useState5 = (0, _react.useState)(initialSchema),
      _useState6 = _slicedToArray(_useState5, 2),
      schema = _useState6[0],
      setSchema = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  var _useState9 = (0, _react.useState)(initialData),
      _useState10 = _slicedToArray(_useState9, 2),
      parsedData = _useState10[0],
      setParsedData = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      formErrors = _useState12[0],
      setFormErrors = _useState12[1];

  var converters = config.converters || {};
  var formatters = config.formatters || {};
  var masks = config.masks || {};
  (0, _react.useEffect)(function () {
    setOriginalData(initialData);
    setValuesFromParsed(initialData);
  }, []);

  function _calcFields(schema) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var newFields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    (0, _lodash.keys)(schema).forEach(function (key) {
      if (_typeof(schema[key]) === "object") {
        _calcFields(schema[key], prefix + key + ".", newFields);
      } else {
        newFields.push(prefix + key);
      }
    });
    return newFields;
  }
  /**
   * FORMATTING HELPER FUNCTIONS
   */


  function convert(fieldName, value) {
    var key = (0, _lodash.get)(schema, fieldName) || "";
    return key.split(".").reduce(function (converted, converter) {
      if ((0, _lodash.isNil)(converters[converter])) {
        return converted;
      }

      return converters[converter](value);
    }, value);
  }

  function format(fieldName, value) {
    var key = (0, _lodash.get)(schema, fieldName) || "";
    return key.split(".").reduce(function (response, formatter) {
      if ((0, _lodash.isNil)(formatters[formatter])) {
        return response;
      }

      return formatters[formatter](response);
    }, {
      errors: [],
      formatted: value,
      parsed: value,
      valid: true
    });
  }

  function mask(fieldName, value) {
    var key = (0, _lodash.get)(schema, fieldName) || "";
    return key.split(".").reduce(function (response, mask) {
      if ((0, _lodash.isNil)(masks[mask])) {
        return response;
      }

      return masks[mask].mask(value);
    }, value);
  }
  /**
   * ERRORS
   */


  function getError(fieldName) {
    return (0, _lodash.get)(formErrors, fieldName) || [];
  }

  function setError(fieldName, newErrors) {
    setFormErrors(function (formErrors) {
      if ((0, _lodash.isEmpty)(newErrors)) {
        var nextErrors = (0, _lodash.cloneDeep)(formErrors);
        (0, _lodash.unset)(nextErrors, fieldName);

        if (fieldName.includes(".")) {
          var currentPath = fieldName.slice(0, fieldName.lastIndexOf("."));

          while (currentPath) {
            if ((0, _lodash.isEmpty)((0, _lodash.get)(nextErrors, currentPath))) {
              (0, _lodash.unset)(nextErrors, currentPath);
              currentPath = currentPath.slice(0, currentPath.lastIndexOf("."));
            } else {
              break;
            }
          }
        }

        return nextErrors;
      } else {
        var _nextErrors = (0, _lodash.set)({}, fieldName, newErrors);

        return _objectSpread({}, formErrors, {}, _nextErrors);
      }
    });
  }

  function getErrors() {
    return formErrors;
  }

  function setErrors(newErrors) {
    setFormErrors(newErrors);
  }
  /**
   * VALUES
   */


  function getValue(fieldName) {
    return (0, _lodash.get)(data, fieldName);
  }

  function setValue(fieldName, value) {
    var nextData = (0, _lodash.set)({}, fieldName, mask(fieldName, value));

    var _format = format(fieldName, value),
        errors = _format.errors,
        parsed = _format.parsed;

    var nextParsedData = (0, _lodash.set)({}, fieldName, parsed);
    setData(function (data) {
      return _objectSpread({}, data, {}, nextData);
    });
    setParsedData(function (parsedData) {
      return _objectSpread({}, parsedData, {}, nextParsedData);
    });

    if ((0, _lodash.isEmpty)(errors) && !(0, _lodash.isEmpty)((0, _lodash.get)(formErrors, fieldName))) {
      setError(fieldName, []);
    }
  }

  function getValues() {
    return data;
  }

  function setValues(values) {
    var nextData = {};
    var nextParsedData = {};
    fields.forEach(function (fieldName) {
      var value = (0, _lodash.get)(values, fieldName);

      if (typeof value !== "undefined") {
        (0, _lodash.set)(nextData, fieldName, mask(fieldName, value));
        (0, _lodash.set)(nextParsedData, fieldName, format(fieldName, value).parsed);
      }
    });
    setData(nextData);
    setParsedData(nextParsedData);
  }

  function setValuesFromParsed(values) {
    var nextData = {};
    fields.forEach(function (fieldName) {
      var value = (0, _lodash.get)(values, fieldName);

      if (typeof value !== "undefined") {
        (0, _lodash.set)(nextData, fieldName, convert(fieldName, value));
      }
    });
    setData(function (data) {
      return _objectSpread({}, data, {}, nextData);
    });
  }
  /**
   * VALIDATION
   */


  function isValid() {
    var flag = true;

    for (var i = 0; i < fields.length; i++) {
      var _format2 = format(fields[i], getValue(fields[i])),
          valid = _format2.valid;

      if (valid === false) {
        flag = false;
        break;
      }
    }

    return flag;
  }

  function validate(fieldName) {
    var _format3 = format(fieldName, getValue(fieldName)),
        errors = _format3.errors,
        formatted = _format3.formatted,
        parsed = _format3.parsed;

    setError(fieldName, errors);
    var nextData = (0, _lodash.set)({}, fieldName, formatted);
    setData(function (data) {
      return _objectSpread({}, data, {}, nextData);
    });
    var nextParsed = (0, _lodash.set)({}, fieldName, parsed);
    setParsedData(function (parsedData) {
      return _objectSpread({}, parsedData, {}, nextParsed);
    });
  }

  function validateAll() {
    var nextErrors = {};
    var nextData = {};
    var nextParsedData = {};
    fields.forEach(function (field) {
      var _format4 = format(field, getValue(field)),
          errors = _format4.errors,
          formatted = _format4.formatted,
          parsed = _format4.parsed;

      (0, _lodash.set)(nextErrors, field, errors);
      (0, _lodash.set)(nextData, field, formatted);
      (0, _lodash.set)(nextParsedData, field, parsed);
    });
    setFormErrors(nextErrors);
    setData(nextData);
    setParsedData(nextParsedData);
  }
  /**
   * DIFFERENCES
   */


  function extractDifferences(original) {
    var differences = {};
    fields.forEach(function (field) {
      if (((0, _lodash.isNil)((0, _lodash.get)(original, field)) || (0, _lodash.get)(original, field) === "") && ((0, _lodash.isNil)((0, _lodash.get)(parsedData, field)) || (0, _lodash.get)(parsedData, field) === "")) {// do nothing
      } else if (!(0, _lodash.isEqual)((0, _lodash.get)(original, field), (0, _lodash.get)(parsedData, field))) {
        (0, _lodash.set)(differences, field, (0, _lodash.get)(parsedData, field));
      }
    });
    return differences;
  }
  /**
   * SCHEMA
   */


  function updateSchema() {
    var newSchema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    setSchema(newSchema);
    setFields(_calcFields(newSchema));
    validateAll();
    setFormErrors({});
  }
  /**
   * RETURN OBJECT: containing state and functions with the same interface as the FormLinker class from "form-linker".
   */


  return {
    data: data,
    parsedData: parsedData,
    originalData: originalData,
    schema: schema,
    errors: formErrors,
    fields: fields,
    calcFields: function calcFields() {
      return setFields(_calcFields(schema));
    },
    convert: convert,
    format: format,
    mask: mask,
    getError: getError,
    getErrors: getErrors,
    setError: setError,
    setErrors: setErrors,
    getValue: getValue,
    getValues: getValues,
    setValue: setValue,
    setValues: setValues,
    setValuesFromParsed: setValuesFromParsed,
    isValid: isValid,
    validate: validate,
    validateAll: validateAll,
    extractDifferences: extractDifferences,
    updateSchema: updateSchema,
    arePropsEqual: arePropsEqual
  };
};

var _default = useFormLinker;
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

exports.default = _default;

function isFLEqual(currentFormLinker, nextFormLinker, fieldName) {
  return (0, _lodash.isEqualWith)(currentFormLinker, nextFormLinker, function (val1, val2, key) {
    // only consider data or errors to have changed if the changed value is for the current Field
    if (key === "data") {
      if (val1[fieldName] !== val2[fieldName]) {
        return false;
      }

      return true;
    }

    if (key === "errors") {
      if ((0, _lodash.isNil)(val1[fieldName]) && (0, _lodash.isNil)(val2[fieldName])) {
        return true;
      }

      if (val1[fieldName] !== val2[fieldName]) {
        return false;
      }

      return true;
    } // changes to formLinker fields or functions other than data & errors should not trigger a rerender so consider them equal


    if (!(0, _lodash.isNil)(key)) {
      return true;
    }
  });
}

;

function arePropsEqual(props, nextProps, fieldName) {
  return (0, _lodash.isEqualWith)(props, nextProps, function (val1, val2, key) {
    // formLinker will always cause the props to change, so handle the comparison manually
    if (key === "formLinker") {
      return isFLEqual(props.formLinker, nextProps.formLinker, fieldName);
    } // for all other props just make the usual shallow comparison


    if (!(0, _lodash.isNil)(key) && val1 !== val2) {
      return false;
    }
  });
}

;