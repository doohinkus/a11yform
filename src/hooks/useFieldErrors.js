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
  return [fieldErrors, addFieldError, clearFieldError, getFieldError];
}
