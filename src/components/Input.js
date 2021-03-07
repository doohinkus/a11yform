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
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        type={type}
        name={name}
        aria-invalid={isError}
        aria-describedby={`${props.id}-live`}
      />
      <span id={`${props.id}-live`} aria-live="assertive">
        <ShowWhenTrue condition={isError}>
          {props.ariaMessage || fieldErrorMessage}
        </ShowWhenTrue>
      </span>
      {/* <ShowWhenTrue condition={isError}>{fieldErrorMessage}</ShowWhenTrue> */}
    </>
  );
}
