import useFormLinker from "../src";
import React from "react";
import * as fn from "form-formatters";
import { act, cleanup, fireEvent, render } from "@testing-library/react";
import { cloneDeep } from "lodash";

let fl, props;

const defaultConverters = {
  currency: fn.CurrencyConverter,
};

const defaultFormatters = {
  currency: fn.CurrencyFormatter,
  number: fn.NumberFormatter,
  required: fn.RequiredFormatter,
};

const defaultMasks = {
  currency: fn.CurrencyMask,
  number: fn.NumberFormatter,
};

const defaultOptions = {
  data: {
    testInput: 1234,
  },
  schema: {
    testInput: "currency.required",
  },
  converters: defaultConverters,
  formatters: defaultFormatters,
  masks: defaultMasks
};

const Form = (props) => {
  fl = useFormLinker(props.options);

  const handleBlur = () => {
    fl.validate(props.fieldName);
  };

  const handleChange = (e) => {
    fl.setValue(props.fieldName, e.target.value);
  };

  const handleFocus = () => {
    fl.setError(props.fieldName, []);
  };

  return(
    <label>
      Test Input {fl.getError(props.fieldName).map(error => <span key={error}>{error}</span>)}
      <input
        name={props.fieldName}
        type="text"
        value={fl.getValue(props.fieldName) || ""}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </label>
  );
};

beforeEach(() => {
  props = {
    fieldName: "testInput",
    options: cloneDeep(defaultOptions),
  };
});

afterEach(() => {
  cleanup();
  props = null;
});

test("formatted initial value", () => {
  const {getByLabelText} = render(<Form {...props}/>);
  const input = getByLabelText("Test Input");
  expect(input.value).toBe("1,234.00");
});

test("set value is masked for data type", () => {
  props.initialValue = null;
  const {getByLabelText} = render(<Form {...props}/>);
  const input = getByLabelText("Test Input");
  fireEvent.change(input, {target: {value: "$567.8foo"}});
  expect(input.value).toBe("567.8");
  fireEvent.blur(input);
  expect(input.value).toBe("567.80");
  expect(fl.getValue("testInput")).toBe("567.80");
  expect(fl.parsedData["testInput"]).toBe(567.8);
});

test("unchanged values returns same state", () => {
  render(<Form {...props}/>);
  const initData = fl.data;
  act(() => {
    fl.setValues({testInput: "1,234.00"});
    fl.setValue("testInput", "1,234.00");
    fl.validate("testInput");
    fl.setError("testInput", []);

  });
  expect(fl.data).toBe(initData);
});

test("creates validation error", () => {
  const {container} = render(<Form {...props}/>);
  const label = container.querySelector("label");
  const input = container.querySelector("input");
  fireEvent.change(input, {target: {value: ""}});
  fireEvent.blur(input);
  expect(fl.getError("testInput")).toContain("FormFormatters.required");
  expect(label.textContent).toMatch("FormFormatters.required");
});

test("set and clear errors", () => {
  props.options.schema = {
    name: {
      first: "string.required",
      last: "string.required"
    }
  };
  props.fieldName = "name.first";
  render(<Form {...props}/>);
  act(() => {
    fl.setErrors({name: {first: ["required"], last: ["required"]}});
    fl.setValue("name.first", "Susan");
    fl.validateAll();
  });
  expect(fl.getErrors()).toEqual({name: {last: ["FormFormatters.required"]}});
  act(() => {
    fl.setError("name.first", ["not your real name"]);
    fl.setError("name.last", []);
  });
  expect(fl.getErrors()).toEqual({name: {first: ["not your real name"]}});
  console.log("last check");
  act(() => {
    fl.setError("name.first", []);
  });
  expect(fl.getErrors()).toEqual({});
});

test("clear error on deeply nested schema", () => {
  props.options.schema = {
    credit: {
      values: {
        score: "number",
      },
      labels: {
        score: "string",
      }
    }
  };
  render(<Form {...props}/>);
  act(() => {
    fl.setErrors({credit: {values: {score: ["invalid score"]}, labels: {score: ["not a good label"]}}});
    fl.setError("credit.values.score", []);
  });
  expect(fl.getErrors()).toEqual({credit: {labels: {score: ["not a good label"]}}});
});

test("empty options", () => {
  props.options = undefined;
  const {getByLabelText} = render(<Form {...props}/>);
  expect(getByLabelText("Test Input").value).toBe("");
  expect(fl.schema).toEqual({});
  expect(fl.fields).toEqual([]);
});

test("no converter, formatter, or mask functions", () => {
  props.options.converters = undefined;
  props.options.formatters = undefined;
  props.options.masks = undefined;
  const {getByLabelText} = render(<Form {...props}/>);
  act(() => {
    fl.setValue("testInput", 5678);
    fl.validate("testInput");
    fl.validateAll();
  });
  expect(getByLabelText("Test Input").value).toBe("5678");
  expect(fl.isValid()).toBe(true);
});

test("nested schema", () => {
  props.options.schema = {
    name: {
      first: "string.required"
    }
  };
  props.fieldName = "name.first";
  props.options.data = {};
  const {getByLabelText} = render(<Form {...props}/>);
  const input = getByLabelText("Test Input");
  expect(input.value).toBe("");
  expect(fl.fields).toEqual(["name.first"]);
  fireEvent.blur(input);
  const errors = fl.getErrors();
  expect(errors).toEqual({name: {first: ["FormFormatters.required"]}});
  act(() => {
    fl.setValue("name.first", "Baz");
  });
  expect(input.value).toBe("Baz");
  const value = fl.getValue("name.first");
  expect(value).toEqual("Baz");
  const values = fl.getValues();
  expect(values).toEqual({name: {first: "Baz"}});
  fireEvent.change(input, {target: {value: "Foo"}});
  expect(fl.getValue("name.first")).toBe("Foo");
  act(() => {
    fl.setValues({name: {first: "Bar"}});
  });
  expect(input.value).toBe("Bar");
  act(() => {
    fl.setValues();
  });
  const valid = fl.isValid();
  expect(valid).toBe(false);
});

test("extract differences", () => {
  const {getByLabelText} = render(<Form {...props}/>);
  fireEvent.change(getByLabelText("Test Input"), {target: {value: "9876"}});
  act(() => {
    const differences = fl.extractDifferences(fl.originalData, ["testInput"]);
    expect(differences).toEqual({testInput: 9876});
  });
});

test("update schema", () => {
  render(<Form {...props}/>);
  act(() => {
    fl.updateSchema();
  });
  expect(fl.schema).toEqual({});
});

test("compare props and nextProps", () => {
  render(<Form {...props}/>);
  const currentProps = {
    formLinker: {
      data: {
        testInput: "123"
      },
      errors: {},
      getValue: () => {},
    },
    fieldName: "testInput",
    otherData: "somethingElse",
  };
  const nextProps = {
    formLinker: {
      data: {
        testInput: "123"
      },
      errors: {},
      getValue: () => {},
    },
    fieldName: "testInput",
    otherData: "somethingElse",
  };
  let areEqual = fl.arePropsEqual(currentProps, nextProps, "testInput");
  expect(areEqual).toBe(true);

  nextProps.formLinker.data.testInput = "456";
  areEqual = fl.arePropsEqual(currentProps, nextProps, "testInput");
  expect(areEqual).toBe(false);

  const errors = ["required"];
  nextProps.formLinker.data.testInput = "123";
  nextProps.formLinker.errors.testInput = errors;
  areEqual = fl.arePropsEqual(currentProps, nextProps, "testInput");
  expect(areEqual).toBe(false);

  currentProps.formLinker.errors.testInput = errors;
  areEqual = fl.arePropsEqual(currentProps, nextProps, "testInput");
  expect(areEqual).toBe(true);

  nextProps.formLinker = currentProps.formLinker;
  nextProps.otherData = "changedValue";
  areEqual = fl.arePropsEqual(currentProps, nextProps, "testInput");
  expect(areEqual).toBe(false);
});
