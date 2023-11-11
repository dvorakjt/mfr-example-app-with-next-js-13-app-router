import { credentialsTemplate } from "./credentials.template";
import { addressesTemplate } from "./addresses.template";
import { RootFormTemplate } from "modeled-forms-react";
import { programmingExperienceTemplate } from "./programming-experience.template";

export enum RootFormFields {
  CREDENTIALS = 'credentials',
  ADDRESSES = 'addresses',
  PROGRAMMING_EXPERIENCE = 'programmingExperience'
}

export const rootFormTemplate : RootFormTemplate = {
  fields : {
    [RootFormFields.CREDENTIALS] : credentialsTemplate,
    [RootFormFields.ADDRESSES] : addressesTemplate,
    [RootFormFields.PROGRAMMING_EXPERIENCE] : programmingExperienceTemplate
  },
  submitFn : ({ value }) => new Promise(resolve => resolve(value))
}