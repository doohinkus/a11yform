import { Fragment } from "react";
import ShowWhenTrue from "../components/ShowWhenTrue";
export default function InputText({
  name,
  label = "",
  isError = false,
  ...props
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        name={name}
        type="text"
        aria-describedby={`${props.id}-live`}
      />
      <span
        id={`${props.id}-live`}
        className="span error heavy font"
        aria-live="assertive"
      >
        <ShowWhenTrue condition={isError}>{props.ariaMessage}</ShowWhenTrue>
      </span>
    </>
  );
}
