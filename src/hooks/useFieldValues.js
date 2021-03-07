import { useState } from "react";

export function useFieldValues(defaultState = {}) {
  const [fields, setFieldValue] = useState(defaultState);

  const textHelper = (e) =>
    setFieldValue({
      ...fields,
      [e.target.name]: e.target.value,
    });

  const checkboxHelper = (e) =>
    setFieldValue({
      ...fields,
      [e.target.name]: {
        checked: e.target.checked,
        value: e.target.value,
      },
    });

  // console.log(fields);

  return [fields, textHelper, checkboxHelper];
}
