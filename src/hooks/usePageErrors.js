import { useState } from "react";

export function usePageErrors() {
  const [pageErrors, setPageError] = useState([]);
  //   pageErrors = [{ id: "ssn", error: "Please make correct: There is incomplete information in <field>"}]
  const addPageError = (error) => {
    const cleanedErrors = pageErrors.filter(({ id }) => id !== error.id);
    setPageError([...cleanedErrors, error]);
  };
  const clearPageError = (id) => {
    setPageError([...pageErrors.filter(({ id }) => id !== id)]);
  };
  return [pageErrors, addPageError, clearPageError];
}
