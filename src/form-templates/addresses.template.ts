import { NestedFormTemplate } from "modeled-forms-react";
import { addressTemplate } from "./address.template";

export enum AddressesFields {
  HOME = 'home',
  MAILING = 'mailing',
}

export const addressesTemplate : NestedFormTemplate = {
  fields : {
    [AddressesFields.HOME] : addressTemplate,
    [AddressesFields.MAILING] : {
      ...addressTemplate,
      omitByDefault : true
    }
  }
}