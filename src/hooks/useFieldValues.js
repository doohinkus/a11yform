import { useState } from "react";

export function useFieldValues(defaultState = {}) {
  const [fields, setFieldValue] = useState(defaultState);
  const fieldValueHelper = (e) => {
    if (e.target.type === "checkbox") {
      setFieldValue({
        ...fields,
        [e.target.name]: {
          checked: e.target.checked,
          value: e.target.value,
        },
      });
    } else {
      setFieldValue({
        ...fields,
        [e.target.name]: e.target.value,
      });
    }
  };
  console.log(fields);

  return [fields, fieldValueHelper];
}
