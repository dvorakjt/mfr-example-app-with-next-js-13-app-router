import {
  NestedFormTemplate, 
  required, 
  email,
  inLengthRange, 
  includesLower, 
  includesUpper, 
  includesDigit, 
  includesSymbol, 
  ValidatorResult
} from "modeled-forms-react";

export enum CredentialsFields {
  NAME = 'name',
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword'
}

export const credentialsTemplate : NestedFormTemplate = {
  fields : {
    [CredentialsFields.NAME] : {
      defaultValue : '',
      syncValidators : [
        required('Please enter your name.')
      ]
    },
    [CredentialsFields.EMAIL] : {
      defaultValue : '',
      syncValidators : [
        email('Please enter a valid email address')
      ]
    },
    [CredentialsFields.PASSWORD] : {
      defaultValue : '',
      syncValidators : [
        inLengthRange(8, 64, 'Password must be between 8 and 64 characters in length.', {
          successMessage :  'Password is between 8 and 64 characters in length.',
          exclusiveMin : false,
          exclusiveMax : false
        }),
        includesLower('Password must include a lowercase letter.', 'Password includes a lowercase letter.'),
        includesUpper('Password must include an uppercase letter.', 'Password includes an uppercase letter.'),
        includesDigit('Password must include a digit.', 'Password includes a digit.'),
        includesSymbol('Password must include a symbol.', 'Password includes a symbol.')
      ]
    },
    [CredentialsFields.CONFIRM_PASSWORD] : {
      defaultValue : '',
      syncValidators : [
        required('Please re-enter your password.')
      ]
    }
  },
  multiFieldValidators : {
    sync : [
      ({ [CredentialsFields.PASSWORD] : password, [CredentialsFields.CONFIRM_PASSWORD] : confirmPassword }) => {
        const isValid = confirmPassword.value === password.value;

        const result : ValidatorResult = {
          isValid,
          message : isValid ? 'The passwords match.' : 'Please ensure the re-entered password matches the password.'
        }

        return result;
      }
    ]
  },
  finalizedFields : {
    password : {
      //remove confirmPassword from the form by including it here
      syncFinalizerFn : ({ [CredentialsFields.PASSWORD] : password, [CredentialsFields.CONFIRM_PASSWORD] : confirmPassword }) => password.value
    }
  }
}