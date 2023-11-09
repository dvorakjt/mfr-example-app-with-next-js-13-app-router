import { ValidatorResult } from "modeled-forms-react";

export function isZipCode(str : string) {
  const isValid = /^\d{5}$/.test(str);

  const result : ValidatorResult = {
    isValid
  }

  if(!result.isValid) result.message = 'Please enter a 5-digit zip code.';

  return result;
}