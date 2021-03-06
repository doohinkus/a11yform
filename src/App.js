import { useState } from "react";
import "./App.css";

function App() {
  // convert to custom hook
  const [fields, setFieldValue] = useState({});
  const fieldValueHelper = (e) =>
    setFieldValue({ ...fields, [e.target.name]: e.target.value });
  console.log(fields);
  // convert to custom hook

  return (
    <div className="App">
      <div className="container">
        <div>Step 1 of 2</div>
        <fieldset>
          <legend>Name:</legend>
          <div>
            <label htmlFor="first">First Name:</label>
            <input
              name="first"
              id="first"
              type="text"
              onChange={fieldValueHelper}
              aria-describedby="feedbackFirst"
            />
            <span id="feedbackFirst" aria-live="assertive"></span>
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
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
            <label>Last four digits of ssn:</label>
            <input
              name="ssn"
              id="ssn"
              type="text"
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
