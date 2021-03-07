import { useFieldValues } from "./hooks/useFieldValues";
import { useFieldErrors } from "./hooks/useFieldErrors";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [fields, textHelper, checkboxHelper] = useFieldValues();
  const [addFieldError, clearFieldError, getFieldError] = useFieldErrors();

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate backend validation

    console.log("submitted fields", fields);
  };

  // console.log(fieldErrors, "\n", fields, " \n");
  return (
    <div className="App">
      <div className="container">
        <div>Step 1 of 2</div>
        <form noValidate onSubmit={handleSubmit}>
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
                required
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
                required
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
        </form>
      </div>
    </div>
  );
}

export default App;
