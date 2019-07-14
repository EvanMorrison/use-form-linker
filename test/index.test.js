import useFormLinker from "../src";
import React from "react";
import * as fn from "form-formatters";
import { act, cleanup, fireEvent, render } from "@testing-library/react";

let fl, props;

const Form = (props) => {
  fl = useFormLinker({
    data: {
      testInput: props.initialValue,
    },
    schema: {
      testInput: props.schemaValue,
    },
    converters: {
      currency: fn.CurrencyConverter,
      date: fn.DateConverter,
      phoneString: fn.PhoneStringConverter,
    },
    formatters: {
      currency: fn.CurrencyFormatter,
      date: fn.DateFormatter,
      email: fn.EmailFormatter,
      number: fn.NumberFormatter,
      phoneString: fn.PhoneStringConverter,
      required: fn.RequiredFormatter,
    },
    masks: {
      currency: fn.CurrencyMask,
      email: fn.EmailMask,
      number: fn.NumberMask,
      phoneString: fn.PhoneStringMask,
    },
  });

  const handleBlur = () => {
    fl.validate("testInput");
  };

  const handleChange = (e) => {
    fl.setValue("testInput", e.target.value);
  };

  const handleFocus = () => {
    fl.setError("testInput", []);
  };

  return(
    <label>
      Test Input {fl.getError("testInput").map(error => <span key={error}>{error}</span>)}
      <input
        name="testInput"
        type="text"
        value={fl.getValue("testInput") || ""}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </label>
  );
};

afterEach(cleanup);

test("formatted initial value", () => {
  props = {
    initialValue: 1234,
    schemaValue: "currency.required",
  };
  const {container} = render(<Form {...props}/>);
  const input = container.querySelector("input");
  expect(input.value).toBe("1,234.00");
});

test("set value is masked for data type", () => {
  props = {
    initialValue: null,
    schemaValue: "currency.required",
  };
  const {container} = render(<Form {...props}/>);
  const input = container.querySelector("input");
  act(() => {
    fl.setValue("testInput", "$567.8foo");
  });
  expect(input.value).toBe("567.8");
  expect(fl.getValue("testInput")).toBe("567.8");
  expect(fl.parsedData["testInput"]).toBe(567.8);
});

test("creates validation error", () => {
  props = {
    initialValue: 1234,
    schemaValue: "currency.required",
  };
  const {container} = render(<Form {...props}/>);
  const label = container.querySelector("label");
  const input = container.querySelector("input");
  fireEvent.change(input, {target: {value: ""}});
  fireEvent.blur(input);
  expect(fl.getError("testInput")).toContain("FormFormatters.required");
  expect(label.textContent).toMatch("FormFormatters.required");
});
