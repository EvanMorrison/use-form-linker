# use-form-linker
A React custom hooks version of [FormLinker](https://github.com/AlchemyAlcove/FormLinker) (["form-linker" on npm](https://www.npmjs.com/package/form-linker)).

# Form Linker

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/EvanMorrison/use-form-linker/blob/master/LICENSE)

A React custom hook to link form elements to each other and perform validation.

## Install

npm install use-form-linker

## Example

Basic

```js
...
import { EmailFormatter, EmailMask, NumberFormatter, NumberMask, RequiredFormatter } from "form-formatter";
import useFormLinker from "use-form-linker";

export default const Example = () => {
  const fl = useFormLinker({
    data: {
      age: 23,
      email: "test@test.com",
    },
    schema: {
      age: "number.required",
      email: "email.required",
    },
    formatters: {
      "email": EmailFormatter,
      "number": NumberFormatter,
      "required": RequiredFormatter
    },
    masks: {
      "email": EmailMask,
      "number": NumberMask
    }
  });

  return(
    <form>
      <Input formLinker={fl} name="foo"/>
      <Input formLinker={fl} name="email"/>
    </form>
  );
}

const Input = (props) => {
  return(
    <input 
      value={props.formLinker.getValue(props.name)}
      onChange={(e) => props.formLinker.setValue(props.name, e.target.value)}
      onBlur={() => props.formLinker.validate(props.name)}
    />
  );
}
```

## Options object

```js
  const fl = useFormLinker(options);
```

`useFormLinker` receives one argument in the form of an options object with the following properties.

### data

Provide initial data for the form, using an object with field names as keys, structured to match the schema, e.g. `data: {name: "Jane"}`.

### schema

Provide structure and type of data as nested object with field names as keys, and dot delimited string values setting the data type, e.g. `schema: {name: "string.required"}`.

Each schema value string segment is represented in the converters, formatters and masks options. Converters are used to convert certain data types from the format received from the api to the format to be displayed in the form, e.g., a date in epoch form to a human readable calendar date. When validating, the schema and formatters are used to validate each form field. When setting a value the masks are used to limit user input to permitted characters, numbers and/or symbols.

### converters

An object specifying applicable converters to use to convert "parsed" data received or to be sent to the api into a format for display in the form.

### formatters

Object where keys match schema string segment values which map to the formatter to handle the data of that type.

Formatters should have a format function that takes a single value.

Formatters should return data in an object like:

```js
{
  errors: [],
  formatted: "$1,000.00",
  parsed: 1000.00,
  valid: true
}
```

### masks

Object where keys match schema string values and values map to the mask to handle values.

Makes should have a mask function that takes a single value and returns a single value.


## Functions

### Error Functions
`getError(fieldName<String>)` Returns an array of error messages for the specified fieldName.

`getErrors()` Returns all errors in the same structure as the schema.

`setError(fieldName<String>, errors<Array<String>>)` Sets errors for the specified fieldName

`setError(fieldName<String>, [])` Clears errors on the specified fieldName.

`setErrors(errors<Object>)` Sets errors for all keys in object. Uses key/attr as fieldName and value as error array.

When setting an object of errors, we assume that the developer wants to clear out all previous errors and start with a new error set as defined. So when calling this function, all previous errors are removed.


### Value Functions

`getValue(fieldName<String>)` Returns current value in state for formLinker's data object for the specified fieldName.

`getValues()` Returns all values in the structure of the schema.

`setValue(fieldName<String>, value<Anything>) Sets value for the specified fieldName after passing the provided value through the applicable mask function(s) based on the schema.

setValues(value<Object>) Sets values for all keys in object. Uses key/attr as fieldName and value as value.


### Validating Functions

`isValid()` Returns a boolean of whether the form state is valid or not. This uses the schema to check validation.

`validate(fieldName<String>)` Sets errors and formatting for the specified fieldName.

`validateAll()` Calls validate on all fields in the schema.


### Differences Functions

`extractDifferences(original<Object>, fields<Array<String>>)` Returns a differences object. Each key represents a field with changes from the original data. The value of the object represents the current value.

`original` represents the original data set.

`fields` represents an array of strings specifying the fields to check.


### Update Schema Functions

`updateSchema(schema<Object>)` Changes schema and reruns validation and clears errors. This means masking and formatting is rerun.
