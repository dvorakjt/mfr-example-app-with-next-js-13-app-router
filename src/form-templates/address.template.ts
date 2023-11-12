import {
  NestedFormTemplate,
  Validity,
  required
} from 'modeled-forms-react';
import zipState from 'zip-state';
import { US_STATE_ABBREVIATIONS } from './util';
import { isZipCode } from './util';

export enum AddressFields {
  STREET_LINE_1 = 'streetLine1',
  STREET_LINE_2 = 'streetLine2',
  CITY = 'city',
  STATE = 'state',
  ZIP = 'zip'
}

export const addressTemplate : NestedFormTemplate = {
  fields : {
    [AddressFields.STREET_LINE_1] : {
      defaultValue : '',
      syncValidators : [
        required('Please enter your street address.')
      ]
    },
    [AddressFields.STREET_LINE_2] : '',
    [AddressFields.CITY] : {
      defaultValue : '',
      syncValidators : [
        required('Please enter your city.')
      ]
    },
    [AddressFields.STATE] : {
      defaultValue : US_STATE_ABBREVIATIONS[0],
      syncValueControlFn : ({ [AddressFields.ZIP] : zip }) => {
        if(zip.validity < Validity.VALID_FINALIZABLE) return;

        const stateAbbreviation = zipState(zip.value);

        if(!stateAbbreviation) return;

        return stateAbbreviation;
      }
    },
    [AddressFields.ZIP] : {
      defaultValue : '',
      syncValidators : [
        isZipCode
      ]
    }
  }
}