import { Fragment } from "react";
import ShowWhenTrue from "../components/ShowWhenTrue";
export default function Input({
  name,
  label = "",
  type = "text",
  fieldErrorMessage = "",
  isError = false,
  ...props
}) {
  return (
    <>
      <label htmlFor={name} className="label heavy">
        {label}
      </label>
      <input
        {...props}
        // className="outline grow input__text"
        type={type}
        name={name}
        aria-invalid={isError}
        aria-describedby={`${props.id}-live`}
      />
      <span
        className={`span font heavy hide ${
          isError ? "span__error fade-in" : ""
        }`}
        id={`${props.id}-live`}
        aria-live="assertive"
      >
        <ShowWhenTrue condition={isError}>
          {props.ariaMessage || fieldErrorMessage}
        </ShowWhenTrue>
      </span>
    </>
  );
}
