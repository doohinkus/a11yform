import { Fragment } from "react";
import ShowWhenTrue from "../components/ShowWhenTrue";
export default function Input({
  name,
  label = "",
  type = "text",
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
        aria-describedby={`${props.id}-live`}
      />
      <span id={`${props.id}-live`} aria-live="assertive">
        {props.ariaMessage || ""}
      </span>
      <ShowWhenTrue condition={isError}>Error!!!!</ShowWhenTrue>
    </>
  );
}
