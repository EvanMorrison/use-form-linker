(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "react"], factory);
	else if(typeof exports === 'object')
		exports["use-form-linker"] = factory(require("lodash"), require("react"));
	else
		root["use-form-linker"] = factory(root["_"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arePropsEqual\", function() { return arePropsEqual; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n/**\n * use-form-linker emulates all the properties and methods of the\n * FormLinker class (https://www.npmjs.com/package/form-linker) using\n * React hooks to create a custom hook usable with functional components.\n * The benefit is that it ties the form-state in with the component's state\n * so the current form state is always rendered correctly on the screen without\n * resorting to forceUpdate or duplicating data in formlinker and in state.\n * The interface remains the same, so child components won't know the difference.\n */\n\nvar useFormLinker = function useFormLinker() {\n  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var calcFields = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (schema) {\n    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    var newFields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n    Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"keys\"])(schema).forEach(function (key) {\n      if (_typeof(schema[key]) === \"object\") {\n        calcFields(schema[key], prefix + key + \".\", newFields);\n      } else {\n        newFields.push(prefix + key);\n      }\n    });\n    return newFields;\n  }, []);\n  var initialData = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(config.data || {});\n  var initialSchema = config.schema || {};\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(calcFields(initialSchema)),\n      _useState2 = _slicedToArray(_useState, 2),\n      fields = _useState2[0],\n      setFields = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialSchema),\n      _useState4 = _slicedToArray(_useState3, 2),\n      schema = _useState4[0],\n      setSchema = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    data: {},\n    parsedData: initialData.current,\n    errors: {}\n  }),\n      _useState6 = _slicedToArray(_useState5, 2),\n      state = _useState6[0],\n      setState = _useState6[1];\n\n  var converters = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(config.converters || {});\n  var formatters = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(config.formatters || {});\n  var masks = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(config.masks || {});\n  /**\n   * FORMATTING HELPER FUNCTIONS\n   */\n\n  var convert = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (fieldName, value) {\n    var key = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(schema, fieldName) || \"\";\n    return key.split(\".\").reduce(function (converted, converter) {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(converters.current[converter])) {\n        return converted;\n      }\n\n      return converters.current[converter](value);\n    }, value);\n  }, [schema]);\n  var format = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (fieldName, value) {\n    var key = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(schema, fieldName) || \"\";\n    return key.split(\".\").reduce(function (response, formatter) {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(formatters.current[formatter])) {\n        return response;\n      }\n\n      return formatters.current[formatter](response);\n    }, {\n      errors: [],\n      formatted: value,\n      parsed: value,\n      valid: true\n    });\n  }, [schema]);\n  var mask = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (fieldName, value) {\n    var key = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(schema, fieldName) || \"\";\n    return key.split(\".\").reduce(function (response, mask) {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(masks.current[mask])) {\n        return response;\n      }\n\n      return masks.current[mask].mask(value);\n    }, value);\n  }, [schema]);\n  /**\n   * ERRORS\n   */\n\n  var calculateErrorsForState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (fieldName, newErrors, state) {\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqual\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.errors, fieldName, []), newErrors)) {\n      return state;\n    } else if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(newErrors)) {\n      var nextErrors = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"cloneDeep\"])(state.errors);\n      Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"unset\"])(nextErrors, fieldName);\n\n      if (fieldName.includes(\".\")) {\n        var currentPath = fieldName.slice(0, fieldName.lastIndexOf(\".\"));\n\n        while (currentPath) {\n          if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(nextErrors, currentPath))) {\n            Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"unset\"])(nextErrors, currentPath);\n            currentPath = currentPath.slice(0, currentPath.lastIndexOf(\".\"));\n          } else {\n            break;\n          }\n        }\n      }\n\n      return _objectSpread({}, state, {\n        errors: nextErrors\n      });\n    } else {\n      var _nextErrors = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])({}, fieldName, newErrors);\n\n      return _objectSpread({}, state, {\n        errors: _objectSpread({}, state.errors, {}, _nextErrors)\n      });\n    }\n  }, []);\n  var getError = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (fieldName) {\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.errors, fieldName) || [];\n  }, [state.errors]);\n  var setError = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (fieldName, newErrors) {\n    setState(function (state) {\n      var current = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.errors, fieldName, []);\n\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqual\"])(current, newErrors)) {\n        return state;\n      } else {\n        return calculateErrorsForState(fieldName, newErrors, state);\n      }\n    });\n  }, [calculateErrorsForState]);\n  var getErrors = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    return state.errors;\n  }, [state.errors]);\n  var setErrors = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (newErrors) {\n    setState(function (state) {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqual\"])(state.errors, newErrors)) {\n        return state;\n      } else {\n        return _objectSpread({}, state, {\n          errors: newErrors\n        });\n      }\n    });\n  }, []);\n  /**\n   * VALUES\n   */\n\n  var getValue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (fieldName) {\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.data, fieldName);\n  }, [state.data]);\n  var setValue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (fieldName, value) {\n    setState(function (state) {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqual\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.data, fieldName), value)) {\n        return state;\n      } else {\n        var nextData = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])({}, fieldName, mask(fieldName, value));\n        var nextParsedData = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])({}, fieldName, format(fieldName, value).parsed);\n        return _objectSpread({}, state, {\n          data: _objectSpread({}, state.data, {}, nextData),\n          parsedData: _objectSpread({}, state.parsedData, {}, nextParsedData)\n        });\n      }\n    });\n  }, [format, mask]);\n  var getValues = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    return state.data;\n  }, [state.data]);\n  var setValues = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (values) {\n    var nextData = {};\n    var nextParsedData = {};\n    fields.forEach(function (fieldName) {\n      var value = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(values, fieldName);\n\n      if (typeof value !== \"undefined\") {\n        Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextData, fieldName, mask(fieldName, value));\n        Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextParsedData, fieldName, format(fieldName, value).parsed);\n      }\n    });\n    setState(function (state) {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqual\"])(state.data, nextData)) {\n        return state;\n      } else {\n        return _objectSpread({}, state, {\n          data: nextData,\n          parsedData: nextParsedData\n        });\n      }\n    });\n  }, [fields, format, mask]);\n  var setValuesFromParsed = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (values) {\n    var nextData = {};\n    fields.forEach(function (fieldName) {\n      var value = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(values, fieldName);\n\n      if (typeof value !== \"undefined\") {\n        Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextData, fieldName, convert(fieldName, value));\n      }\n    });\n    setState(function (state) {\n      return _objectSpread({}, state, {\n        data: _objectSpread({}, state.data, {}, nextData)\n      });\n    });\n  }, [convert, fields]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setValuesFromParsed(initialData.current);\n  }, [setValuesFromParsed]);\n  /**\n   * VALIDATION\n   */\n\n  var isValid = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    var flag = true;\n\n    for (var i = 0; i < fields.length; i++) {\n      var _format = format(fields[i], getValue(fields[i])),\n          valid = _format.valid;\n\n      if (valid === false) {\n        flag = false;\n        break;\n      }\n    }\n\n    return flag;\n  }, [fields, format, getValue]);\n  var validate = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (fieldName) {\n    setState(function (state) {\n      var _format2 = format(fieldName, Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.data, fieldName)),\n          errors = _format2.errors,\n          formatted = _format2.formatted,\n          parsed = _format2.parsed;\n\n      var nextData = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])({}, fieldName, formatted);\n      var nextParsedData = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])({}, fieldName, parsed);\n\n      var newState = _objectSpread({}, state, {\n        data: _objectSpread({}, state.data, {}, nextData),\n        parsedData: _objectSpread({}, state.parsedData, {}, nextParsedData)\n      });\n\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqual\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.errors, fieldName, []), errors) && Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqual\"])(state, newState)) {\n        return state;\n      } else {\n        return calculateErrorsForState(fieldName, errors, newState);\n      }\n    });\n  }, [calculateErrorsForState, format]);\n  var validateAll = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setState(function (state) {\n      var nextErrors = {};\n      var nextData = {};\n      var nextParsedData = {};\n      fields.forEach(function (field) {\n        var _format3 = format(field, Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.data, field)),\n            errors = _format3.errors,\n            formatted = _format3.formatted,\n            parsed = _format3.parsed;\n\n        Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextData, field, formatted);\n        Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextParsedData, field, parsed);\n\n        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(errors)) {\n          Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(nextErrors, field, errors);\n        }\n      });\n      var nextState = {\n        data: nextData,\n        parsedData: nextParsedData,\n        errors: nextErrors\n      };\n\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqual\"])(state, nextState)) {\n        return state;\n      } else {\n        return nextState;\n      }\n    });\n  }, [fields, format]);\n  /**\n   * DIFFERENCES\n   */\n\n  var extractDifferences = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (original) {\n    var differences = {};\n    fields.forEach(function (field) {\n      if ((Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(original, field)) || Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(original, field) === \"\") && (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.parsedData, field)) || Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.parsedData, field) === \"\")) {// do nothing\n      } else if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqual\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(original, field), Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.parsedData, field))) {\n        Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"set\"])(differences, field, Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(state.parsedData, field));\n      }\n    });\n    return differences;\n  }, [fields, state.parsedData]);\n  /**\n   * SCHEMA\n   */\n\n  var updateSchema = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    var newSchema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    setSchema(newSchema);\n    setFields(calcFields(newSchema));\n    validateAll();\n    setErrors({});\n  }, [calcFields, setErrors, validateAll]);\n  /**\n   * RETURN OBJECT: containing state and functions with the same interface as the FormLinker class from \"form-linker\".\n   */\n\n  return {\n    data: state.data,\n    parsedData: state.parsedData,\n    errors: state.errors,\n    originalData: initialData.current,\n    schema: schema,\n    fields: fields,\n    calcFields: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n      return setFields(calcFields(schema));\n    }, [calcFields, schema]),\n    convert: convert,\n    format: format,\n    mask: mask,\n    getError: getError,\n    getErrors: getErrors,\n    setError: setError,\n    setErrors: setErrors,\n    getValue: getValue,\n    getValues: getValues,\n    setValue: setValue,\n    setValues: setValues,\n    setValuesFromParsed: setValuesFromParsed,\n    isValid: isValid,\n    validate: validate,\n    validateAll: validateAll,\n    extractDifferences: extractDifferences,\n    updateSchema: updateSchema,\n    arePropsEqual: arePropsEqual\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFormLinker);\n/**\n * Functions to help with shouldComponentUpdate or React.memo\n *\n * FormLinker or useFormLinker are useful for handling forms but can result in terrible performance\n * bacause a change anywhere in the form causes a rerender of everything in the form. To optimize\n * responsiveness of forms to user input it's important to minimize the amount of rerendering using\n * shouldComponentUpdate (or React.memo for functional component).\n *\n * Having FormLinker/useFormLinker in the props causes the props-nextProps comparison to always return as\n * having changes even if nothing changed for a particular Field, so the comparison needs to be handled manually.\n * arePropsEqual returns a boolean for whether props and nextProps are equal for a given fieldName in the form.\n */\n\nfunction isFLEqual(currentFormLinker, nextFormLinker, fieldName) {\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqualWith\"])(currentFormLinker, nextFormLinker, function (val1, val2, key) {\n    // only consider data or errors to have changed if the changed value is for the current Field\n    if (key === \"data\") {\n      if (val1[fieldName] !== val2[fieldName]) {\n        return false;\n      }\n\n      return true;\n    }\n\n    if (key === \"errors\") {\n      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(val1[fieldName]) && Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(val2[fieldName])) {\n        return true;\n      }\n\n      if (val1[fieldName] !== val2[fieldName]) {\n        return false;\n      }\n\n      return true;\n    } // changes to formLinker fields or functions other than data & errors should not trigger a rerender so consider them equal\n\n\n    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(key)) {\n      return true;\n    }\n  });\n}\n\n;\nfunction arePropsEqual(props, nextProps, fieldName) {\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEqualWith\"])(props, nextProps, function (val1, val2, key) {\n    // formLinker will always cause the props to change, so handle the comparison manually\n    if (key === \"formLinker\") {\n      return isFLEqual(props.formLinker, nextProps.formLinker, fieldName);\n    } // for all other props just make the usual shallow comparison\n\n\n    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isNil\"])(key) && val1 !== val2) {\n      return false;\n    }\n  });\n}\n;\n\n//# sourceURL=webpack://use-form-linker/./src/index.js?");

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://use-form-linker/external_%7B%22commonjs%22:%22lodash%22,%22commonjs2%22:%22lodash%22,%22amd%22:%22lodash%22,%22root%22:%22_%22%7D?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://use-form-linker/external_%22react%22?");

/***/ })

/******/ });
});