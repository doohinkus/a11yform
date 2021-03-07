import { useState } from "react";

export function usePageErrors() {
  const [pageErrors, setPageError] = useState([]);
  //   pageErrors = [{ id: "ssn", error: "Please make correct: There is incomplete information in <field>"}]
  const addPageError = (error) => {
    setPageError([...pageErrors, error]);
  };
  const clearPageError = (id) => {
    setPageError([pageErrors.filter(({ id }) => id === id)]);
  };
  return [pageErrors, addPageError, clearPageError];
}
