import { useState } from "react";
import { useFieldValues } from "./hooks/useFieldValues";
import { useFieldErrors } from "./hooks/useFieldErrors";
import InputText from "./components/InputText";
import "./App.css";

function App() {
  const [fields, fieldValueHelper] = useFieldValues();
  const [
    fieldErrors,
    addFieldError,
    clearFieldError,
    getFieldError,
  ] = useFieldErrors();
  console.log(fieldErrors, "\n", fields);
  return (
    <div className="App">
      <div className="container">
        <div>Step 1 of 2</div>
        <fieldset>
          <legend>Name:</legend>
          <div>
            <InputText
              label="First Name:"
              name="first"
              id="first"
              type="text"
              onChange={fieldValueHelper}
              isError={getFieldError("first")}
              aria-invalid={getFieldError("first")}
              onBlur={(e) => {
                if (e.target.value.length > 3) {
                  addFieldError(e.target.name);
                } else {
                  clearFieldError(e.target.name);
                }
              }}
            />
          </div>
          <div>
            <InputText
              label="Last Name:"
              name="lastName"
              id="lastName"
              onChange={fieldValueHelper}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Personal indentifiers</legend>
          <div>
            <label>Birthdate:</label>

            <input
              name="date"
              id="date"
              type="date"
              onChange={fieldValueHelper}
            />
          </div>
          <div>
            <InputText
              label="Last four digits of ssn:"
              name="ssn"
              id="ssn"
              onChange={fieldValueHelper}
            />
          </div>
        </fieldset>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default App;
