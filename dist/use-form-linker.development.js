module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, arePropsEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arePropsEqual\", function() { return arePropsEqual; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n/**\n * use-form-linker emulates all the properties and methods of the\n * FormLinker class (https://www.npmjs.com/package/form-linker) using\n * React hooks to create a custom hook usable with functional components.\n * The benefit is that it ties the form-state in with the component's state\n * so the current form state is always rendered correctly on the screen without\n * resorting to forceUpdate or duplicating data in formlinker and in state.\n * The interface remains the same, so child components won't know the difference.\n */\n\nvar useFormLinker = function useFormLinker() {\n  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var initialData = config.data || {};\n  var initialSchema = config.schema || {};\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      _useState2 = _slicedToArray(_useState, 2),\n      originalData = _useState2[0],\n      setOriginalData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_calcFields(initialSchema)),\n      _useState4 = _slicedToArray(_useState3, 2),\n      fields = _useState4[0],\n      setFields = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialSchema),\n      _useState6 = _slicedToArray(_useState5, 2),\n      schema = _useState6[0],\n      setSchema = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState8 = _slicedToArray(_useState7, 2),\n      data = _useState8[0],\n      setData = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialData),\n      _useState10 = _slicedToArray(_useState9, 2),\n      parsedData = _useState10[0],\n      setParsedData = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState12 = _slicedToArray(_useState11, 2),\n      formErrors = _useState12[0],\n      setFormErrors = _useState12[1];\n\n  var converters = config.converters || {};\n  var formatters = config.formatters || {};\n  var masks = config.masks || {};\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setOriginalData(initialData);\n    setValuesFromParsed(initialData);\n  }, []);\n\n  function _calcFields(schema) {\n    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    var newFields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n    Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"keys\"])(schema).forEach(function (key) {\n      if (_typeof(schema[key]) === \"object\") {\n        _calcFields(schema[key], prefix + key + \".\", newFields);\n      } else {\n        newFields.push(prefix + key);\n      }\n    });\n    return newFields;\n  }\n  /**\n   * FORMATTING HELPER FUNCTIONS\n   */\n\n\n  function convert(fieldName, value) {\n    var key = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(schema, fieldName) || \"\";\n    return key.split(\".\").reduce(function (converted, converter) {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(converters[converter])) {\n        return converted;\n      }\n\n      return converters[converter](value);\n    }, value);\n  }\n\n  function format(fieldName, value) {\n    var key = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(schema, fieldName) || \"\";\n    return key.split(\".\").reduce(function (response, formatter) {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(formatters[formatter])) {\n        return response;\n      }\n\n      return formatters[formatter](response);\n    }, {\n      errors: [],\n      formatted: value,\n      parsed: value,\n      valid: true\n    });\n  }\n\n  function mask(fieldName, value) {\n    var key = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(schema, fieldName) || \"\";\n    return key.split(\".\").reduce(function (response, mask) {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(masks[mask])) {\n        return response;\n      }\n\n      return masks[mask].mask(value);\n    }, value);\n  }\n  /**\n   * ERRORS\n   */\n\n\n  function getError(fieldName) {\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(formErrors, fieldName) || [];\n  }\n\n  function setError(fieldName, newErrors) {\n    setFormErrors(function (formErrors) {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(newErrors)) {\n        var nextErrors = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"cloneDeep\"])(formErrors);\n        Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"unset\"])(nextErrors, fieldName);\n\n        if (fieldName.includes(\".\")) {\n          var currentPath = fieldName.slice(0, fieldName.lastIndexOf(\".\"));\n\n          while (currentPath) {\n            if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(nextErrors, currentPath))) {\n              Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"unset\"])(nextErrors, currentPath);\n              currentPath = currentPath.slice(0, currentPath.lastIndexOf(\".\"));\n            } else {\n              break;\n            }\n          }\n        }\n\n        return nextErrors;\n      } else {\n        var _nextErrors = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])({}, fieldName, newErrors);\n\n        return _objectSpread({}, formErrors, {}, _nextErrors);\n      }\n    });\n  }\n\n  function getErrors() {\n    return formErrors;\n  }\n\n  function setErrors(newErrors) {\n    setFormErrors(newErrors);\n  }\n  /**\n   * VALUES\n   */\n\n\n  function getValue(fieldName) {\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(data, fieldName);\n  }\n\n  function setValue(fieldName, value) {\n    var nextData = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])({}, fieldName, mask(fieldName, value));\n\n    var _format = format(fieldName, value),\n        errors = _format.errors,\n        parsed = _format.parsed;\n\n    var nextParsedData = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])({}, fieldName, parsed);\n    setData(function (data) {\n      return _objectSpread({}, data, {}, nextData);\n    });\n    setParsedData(function (parsedData) {\n      return _objectSpread({}, parsedData, {}, nextParsedData);\n    });\n\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(errors) && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(formErrors, fieldName))) {\n      setError(fieldName, []);\n    }\n  }\n\n  function getValues() {\n    return data;\n  }\n\n  function setValues(values) {\n    var nextData = {};\n    var nextParsedData = {};\n    fields.forEach(function (fieldName) {\n      var value = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(values, fieldName);\n\n      if (typeof value !== \"undefined\") {\n        Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextData, fieldName, mask(fieldName, value));\n        Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextParsedData, fieldName, format(fieldName, value).parsed);\n      }\n    });\n    setData(nextData);\n    setParsedData(nextParsedData);\n  }\n\n  function setValuesFromParsed(values) {\n    var nextData = {};\n    fields.forEach(function (fieldName) {\n      var value = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(values, fieldName);\n\n      if (typeof value !== \"undefined\") {\n        Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextData, fieldName, convert(fieldName, value));\n      }\n    });\n    setData(function (data) {\n      return _objectSpread({}, data, {}, nextData);\n    });\n  }\n  /**\n   * VALIDATION\n   */\n\n\n  function isValid() {\n    var flag = true;\n\n    for (var i = 0; i < fields.length; i++) {\n      var _format2 = format(fields[i], getValue(fields[i])),\n          valid = _format2.valid;\n\n      if (valid === false) {\n        flag = false;\n        break;\n      }\n    }\n\n    return flag;\n  }\n\n  function validate(fieldName) {\n    var _format3 = format(fieldName, getValue(fieldName)),\n        errors = _format3.errors,\n        formatted = _format3.formatted,\n        parsed = _format3.parsed;\n\n    setError(fieldName, errors);\n    var nextData = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])({}, fieldName, formatted);\n    setData(function (data) {\n      return _objectSpread({}, data, {}, nextData);\n    });\n    var nextParsed = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])({}, fieldName, parsed);\n    setParsedData(function (parsedData) {\n      return _objectSpread({}, parsedData, {}, nextParsed);\n    });\n  }\n\n  function validateAll() {\n    var nextErrors = {};\n    var nextData = {};\n    var nextParsedData = {};\n    fields.forEach(function (field) {\n      var _format4 = format(field, getValue(field)),\n          errors = _format4.errors,\n          formatted = _format4.formatted,\n          parsed = _format4.parsed;\n\n      Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextErrors, field, errors);\n      Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextData, field, formatted);\n      Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextParsedData, field, parsed);\n    });\n    setFormErrors(nextErrors);\n    setData(nextData);\n    setParsedData(nextParsedData);\n  }\n  /**\n   * DIFFERENCES\n   */\n\n\n  function extractDifferences(original) {\n    var differences = {};\n    fields.forEach(function (field) {\n      if ((Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(original, field)) || Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(original, field) === \"\") && (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(parsedData, field)) || Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(parsedData, field) === \"\")) {// do nothing\n      } else if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqual\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(original, field), Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(parsedData, field))) {\n        Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(differences, field, Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(parsedData, field));\n      }\n    });\n    return differences;\n  }\n  /**\n   * SCHEMA\n   */\n\n\n  function updateSchema() {\n    var newSchema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    setSchema(newSchema);\n    setFields(_calcFields(newSchema));\n    validateAll();\n    setFormErrors({});\n  }\n  /**\n   * RETURN OBJECT: containing state and functions with the same interface as the FormLinker class from \"form-linker\".\n   */\n\n\n  return {\n    data: data,\n    parsedData: parsedData,\n    originalData: originalData,\n    schema: schema,\n    errors: formErrors,\n    fields: fields,\n    calcFields: function calcFields() {\n      return setFields(_calcFields(schema));\n    },\n    convert: convert,\n    format: format,\n    mask: mask,\n    getError: getError,\n    getErrors: getErrors,\n    setError: setError,\n    setErrors: setErrors,\n    getValue: getValue,\n    getValues: getValues,\n    setValue: setValue,\n    setValues: setValues,\n    setValuesFromParsed: setValuesFromParsed,\n    isValid: isValid,\n    validate: validate,\n    validateAll: validateAll,\n    extractDifferences: extractDifferences,\n    updateSchema: updateSchema,\n    arePropsEqual: arePropsEqual\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFormLinker);\n/**\n * Functions to help with shouldComponentUpdate or React.memo\n *\n * FormLinker or useFormLinker are useful for handling forms but can result in terrible performance\n * bacause a change anywhere in the form causes a rerender of everything in the form. To optimize\n * responsiveness of forms to user input it's important to minimize the amount of rerendering using\n * shouldComponentUpdate (or React.memo for functional component).\n *\n * Having FormLinker/useFormLinker in the props causes the props-nextProps comparison to always return as\n * having changes even if nothing changed for a particular Field, so the comparison needs to be handled manually.\n * arePropsEqual returns a boolean for whether props and nextProps are equal for a given fieldName in the form.\n */\n\nfunction isFLEqual(currentFormLinker, nextFormLinker, fieldName) {\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqualWith\"])(currentFormLinker, nextFormLinker, function (val1, val2, key) {\n    // only consider data or errors to have changed if the changed value is for the current Field\n    if (key === \"data\") {\n      if (val1[fieldName] !== val2[fieldName]) {\n        return false;\n      }\n\n      return true;\n    }\n\n    if (key === \"errors\") {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(val1[fieldName]) && Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(val2[fieldName])) {\n        return true;\n      }\n\n      if (val1[fieldName] !== val2[fieldName]) {\n        return false;\n      }\n\n      return true;\n    } // changes to formLinker fields or functions other than data & errors should not trigger a rerender so consider them equal\n\n\n    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(key)) {\n      return true;\n    }\n  });\n}\n\n;\nfunction arePropsEqual(props, nextProps, fieldName) {\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqualWith\"])(props, nextProps, function (val1, val2, key) {\n    // formLinker will always cause the props to change, so handle the comparison manually\n    if (key === \"formLinker\") {\n      return isFLEqual(props.formLinker, nextProps.formLinker, fieldName);\n    } // for all other props just make the usual shallow comparison\n\n\n    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(key) && val1 !== val2) {\n      return false;\n    }\n  });\n}\n;\n\n//# sourceURL=webpack://use-form-linker/./src/index.js?");

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack://use-form-linker/external_%7B%22commonjs%22:%22lodash%22,%22commonjs2%22:%22lodash%22,%22amd%22:%22lodash%22,%22root%22:%22_%22%7D?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack://use-form-linker/external_%22react%22?");

/***/ })

/******/ });