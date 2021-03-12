import { useState } from "react";

export function useFieldErrors() {
  const [fieldErrors, setFieldError] = useState({});
  const addFieldError = (name) => {
    setFieldError({
      ...fieldErrors,
      [name]: { error: true },
    });
  };
  const clearFieldError = (name) => {
    setFieldError({
      ...fieldErrors,
      [name]: { error: false },
    });
  };
  const getFieldError = (name) => {
    if (fieldErrors[name] && fieldErrors[name].error) return true;
    return false;
  };
  const isFieldError =
    Object.keys(fieldErrors).filter((error) => getFieldError(error)).length > 0;
  // console.log("field error", isFieldError, " ", isFieldError);
  return [addFieldError, clearFieldError, getFieldError, isFieldError];
}
