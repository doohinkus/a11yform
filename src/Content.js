import { useFieldValues } from "./hooks/useFieldValues";
import { useFieldErrors } from "./hooks/useFieldErrors";
import { usePageErrors } from "./hooks/usePageErrors";
import Input from "./components/Input";
import Fieldset from "./components/Fieldset";
import PageErrors from "./components/PageErrors";
import "./App.scss";

export default function Content() {
  const [fields, textHelper, checkboxHelper] = useFieldValues();
  const [
    addFieldError,
    clearFieldError,
    getFieldError,
    isFieldError,
  ] = useFieldErrors();
  const [pageErrors, addPageError, clearPageError] = usePageErrors();

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate backend validation
    if (!fields.first) {
      addPageError({
        id: 1,
        errorMessage: (
          <div className="left">
            The is an issue with <a href="#first">first name</a>
          </div>
        ),
      });
    } else {
      clearPageError(1);
    }
    // console.log("submitted fields", fields);
  };

  // console.log(fieldErrors, "\n", fields, " \n");
  return (
    <div className="App">
      <div className="font container">
        <div>Step 1 of 2</div>
        <form className="form" noValidate onSubmit={handleSubmit}>
          <Fieldset>
            <legend>Step 1 of 2</legend>
            <PageErrors errors={pageErrors || []} />

            <Fieldset>
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
                  fieldErrorMessage="Please enter more than three characters"
                  onBlur={(e) => {
                    if (e.target.value.length < 3) {
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
            </Fieldset>
            <Fieldset>
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
                  fieldErrorMessage="Please enter four digits."
                  isError={getFieldError("ssn")}
                  onBlur={(e) => {
                    if (!/^\d{4}$/.test(e.target.value)) {
                      addFieldError(e.target.name);
                    } else {
                      clearFieldError(e.target.name);
                    }
                  }}
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
            </Fieldset>
            <button className="button" aria-disabled={isFieldError}>
              Continue
            </button>
          </Fieldset>
        </form>
      </div>
    </div>
  );
}
