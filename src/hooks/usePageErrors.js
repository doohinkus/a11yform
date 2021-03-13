import { useState } from "react";

export function usePageErrors() {
  const [pageErrors, setPageError] = useState([]);
  //   pageErrors = [{ id: "ssn", error: "Please make correct: There is incomplete information in <field>"}]
  const addPageError = (error) => {
    const cleanedErrors = pageErrors.filter(({ id }) => id !== error.id);
    setPageError([...cleanedErrors, error]);
  };
  const clearPageError = (ename) => {
    setPageError([...pageErrors.filter(({ name }) => name !== ename)]);
  };
  return [pageErrors, addPageError, clearPageError];
}
