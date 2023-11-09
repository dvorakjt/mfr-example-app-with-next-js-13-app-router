import { NestedFormTemplate } from "modeled-forms-react";
import { addressTemplate } from "./address.template";

export enum AddressesFields {
  HOME = 'home',
  MAILING = 'mailing',
  PREVIOUS = 'previous'
}

export const addressesTemplate : NestedFormTemplate = {
  fields : {
    [AddressesFields.HOME] : addressTemplate,
    [AddressesFields.MAILING] : {
      ...addressTemplate,
      omitByDefault : true
    },
    [AddressesFields.PREVIOUS] : {
      ...addressTemplate,
      omitByDefault : true
    }
  }
}