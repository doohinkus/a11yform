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
    console.log("submit!!!");
    if (fields && fields.firstName && fields.firstName.length < 3) {
      addPageError({
        id: 1,
        name: "firstName",
        errorMessage: (
          <div className="left">
            The is an issue with <a href="#firstName">first name</a>
          </div>
        ),
      });
    }
    // console.log("submitted fields", fields);
  };

  const blurValidationHelper = ({ validation, value, name }) => {
    if (!validation(value)) {
      addFieldError(name);
    } else {
      clearFieldError(name);
      // USE NAME to FILTER
      // clearPageError(name);
    }
  };

  return (
    <div className="App">
      <div className="font container">
        <div>Step 1 of 2</div>
        <form className="form" noValidate onSubmit={handleSubmit}>
          <Fieldset>
            <legend>Step 1 of 2</legend>
            <PageErrors errors={pageErrors || []} />
            <section className="flex flex__justify__center">
              <Fieldset className="fieldset fill">
                <legend>Name:</legend>
                <div>
                  <Input
                    label="First Name:"
                    name="firstName"
                    id="firstName"
                    type="text"
                    className="outline grow input__text"
                    onChange={textHelper}
                    isError={getFieldError("firstName")}
                    required
                    fieldErrorMessage="Please enter more than three characters"
                    onBlur={(e) =>
                      blurValidationHelper({
                        validation: (val) => val.length > 3,
                        value: e.target.value,
                        name: e.target.name,
                      })
                    }
                  />
                </div>
                <div>
                  <Input
                    label="Last Name:"
                    className="outline grow input__text"
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={textHelper}
                  />
                </div>
              </Fieldset>
              <Fieldset className="fieldset fill">
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
                    className="outline grow input__text"
                    type="text"
                    name="ssn"
                    id="ssn"
                    fieldErrorMessage="Please enter four digits."
                    isError={getFieldError("ssn")}
                    onBlur={(e) =>
                      blurValidationHelper({
                        validation: (val) => /^\d{4}$/.test(val),
                        value: e.target.value,
                        name: e.target.name,
                      })
                    }
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
                    onBlur={(e) =>
                      blurValidationHelper({
                        validation: () => e.target.checked === true,
                        value: e.target.value,
                        name: e.target.name,
                      })
                    }
                    onClick={(e) => {
                      if (e.target.checked) clearFieldError(e.target.name);
                    }}
                    onChange={checkboxHelper}
                  />
                </div>
              </Fieldset>
            </section>
            <button
              className="button"
              // aria-disabled={isFieldError}
              disabled={isFieldError}
            >
              Continue
            </button>
          </Fieldset>
        </form>
      </div>
    </div>
  );
}
