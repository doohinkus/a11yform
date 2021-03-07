import { useState } from "react";
import { useFieldValues } from "./hooks/useFieldValues";
import { useFieldErrors } from "./hooks/useFieldErrors";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [fields, textHelper, checkboxHelper] = useFieldValues();
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
            <Input
              label="First Name:"
              name="first"
              id="first"
              type="text"
              onChange={textHelper}
              isError={getFieldError("first")}
              isRequired={true}
              fieldErrorMessage="hey man, less than 4 characters"
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
            <Input
              label="Last Name:"
              type="text"
              name="lastName"
              id="lastName"
              onChange={textHelper}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Personal indentifiers</legend>
          <div>
            <Input
              name="date"
              id="date"
              type="date"
              label="Birthdate:"
              onChange={textHelper}
            />
          </div>
          <div>
            <Input
              label="Last four digits of ssn:"
              type="text"
              name="ssn"
              id="ssn"
              onChange={textHelper}
            />
          </div>
          <div>
            <Input
              label="Get Rewards"
              type="checkbox"
              name="optIn"
              id="optIn"
              value="rewards"
              isError={getFieldError("optIn")}
              fieldErrorMessage="Check the box, yo!!!"
              onBlur={(e) => {
                if (e.target.checked !== true) addFieldError(e.target.name);
                else clearFieldError(e.target.name);
              }}
              onClick={(e) => {
                if (e.target.checked) clearFieldError(e.target.name);
              }}
              onChange={checkboxHelper}
            />
          </div>
        </fieldset>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default App;
