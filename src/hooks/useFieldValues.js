import { useState } from "react";

export function useFieldValues(defaultState = {}) {
  const [fields, setFieldValue] = useState(defaultState);
  const fieldValueHelper = (e) =>
    setFieldValue({ ...fields, [e.target.name]: e.target.value });
  console.log(fields);

  return [fields, fieldValueHelper];
}
