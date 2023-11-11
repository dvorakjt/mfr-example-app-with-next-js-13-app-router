import { NestedFormTemplate, required } from "modeled-forms-react";
import { programmingLanguagesTemplate } from "./programming-languages.template";

export enum ProgrammingExperienceFields {
  ROLE = 'role',
  LANGUAGES = 'languages',
  REACT_FRAMEWORKS = 'reactFramework'
}

export const programmingExperienceTemplate : NestedFormTemplate = {
  fields : {
    [ProgrammingExperienceFields.ROLE] : {
      primaryDefaultValue : 'frontend',
      secondaryDefaultValue : '',
      syncValidators : [
        required('Please enter your role.')
      ]
    },
    [ProgrammingExperienceFields.LANGUAGES] : programmingLanguagesTemplate,
    [ProgrammingExperienceFields.REACT_FRAMEWORKS] : 'next.js'
  },
  finalizedFields : {
    programmingLanguages : {
      syncFinalizerFn : ({
        [ProgrammingExperienceFields.LANGUAGES] : languages
      }) => {
        return Object.values(languages.value).filter(value => value).join(', ');
      }
    }
  }
}