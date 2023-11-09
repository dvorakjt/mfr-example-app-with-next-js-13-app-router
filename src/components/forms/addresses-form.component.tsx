'use client';
import { NestedFormAsForm } from "modeled-forms-react";
import { RootFormFields } from "@/form-templates/root-form.template";
import { AddressesFields } from "@/form-templates/addresses.template";
import { AddressFieldset } from "./address-fieldset.component";
import { OmittableFieldController } from "../util/omittable-field-controller/omittable-field-controller.component";
import styles from './styles.module.css';
import { useContext } from "react";
import { ButtonsContainer } from "../util/buttons-container/buttons-container.component";
import { ConfirmButton } from "../buttons/confirm-button.component";
import { ResetButton } from "../buttons/reset-button.component";
import { Spacer } from "../util/spacers/spacer.component";

export function AddressesForm() {
  

  return (
    <NestedFormAsForm fieldName={RootFormFields.ADDRESSES} className={styles.form}>
      <AddressFieldset fieldName={AddressesFields.HOME} legend="Home Address"/>

      <OmittableFieldController fieldName={AddressesFields.MAILING} labelText="My Mailing Address is Different" />
      
      <AddressFieldset fieldName={AddressesFields.MAILING} legend="Mailing Address" />

      <Spacer />

      <ButtonsContainer>
        <ResetButton />
        <ConfirmButton>Continue</ConfirmButton>
      </ButtonsContainer>
    </NestedFormAsForm>
  )
}