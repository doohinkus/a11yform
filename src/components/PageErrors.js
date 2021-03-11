import { Fragment } from "react";
export default function PageErrors({ errors }) {
  const pageErrors =
    errors &&
    errors.map(({ errorMessage, id }) => <div key={id}>{errorMessage}</div>);
  if (errors && errors.length > 0) {
    return <Fragment>{pageErrors}</Fragment>;
  }
  return null;
}
