import { credentialsTemplate } from "./credentials.template";
import { addressesTemplate } from "./addresses.template";
import { RootFormTemplate } from "modeled-forms-react";

export enum RootFormFields {
  CREDENTIALS = 'credentials',
  ADDRESSES = 'addresses'
}

export const rootFormTemplate : RootFormTemplate = {
  fields : {
    [RootFormFields.CREDENTIALS] : credentialsTemplate,
    [RootFormFields.ADDRESSES] : addressesTemplate
  },
  submitFn : ({ value }) => new Promise(resolve => resolve(value))
}