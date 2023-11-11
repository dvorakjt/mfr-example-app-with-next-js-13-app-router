'use client';
import { NestedFormAsForm, OmittableContent } from "modeled-forms-react";
import { RootFormFields } from "@/form-templates/root-form.template";
import { AddressesFields } from "@/form-templates/addresses.template";
import { AddressFieldset } from "./address-fieldset.component";
import { OmittableFieldController } from "../util/omittable-field-controller/omittable-field-controller.component";
import styles from './styles.module.css';
import { ButtonsContainer } from "../util/buttons-container/buttons-container.component";
import { ConfirmButton } from "../buttons/confirm-button.component";
import { ResetButton } from "../buttons/reset-button.component";
import { Spacer } from "../util/spacers/spacer.component";
import { useRedirectToFirstInvalidNestedForm } from "@/hooks/use-redirect-to-first-invalid-nested-form";
import { FormMessages } from "../messages/form-messages/form-messages.component";
import { useRouter } from "next/navigation";

export function AddressesForm() {
  useRedirectToFirstInvalidNestedForm();
  const router = useRouter();

  return (
    <NestedFormAsForm fieldName={RootFormFields.ADDRESSES} className={styles.form} id='addresses'>
      <AddressFieldset fieldName={AddressesFields.HOME} legend="Home Address"/>

      <OmittableFieldController fieldName={AddressesFields.MAILING} labelText="My Mailing Address is Different" />
      
      <OmittableContent fieldName={AddressesFields.MAILING}>
        <Spacer />
        <AddressFieldset fieldName={AddressesFields.MAILING} legend="Mailing Address" />
      </OmittableContent>

      <Spacer />

      <ButtonsContainer>
        <ResetButton />
        <ConfirmButton onSuccess={() => router.push('/programming-experience')}>Continue</ConfirmButton>
      </ButtonsContainer>

      <Spacer />

      <FormMessages idPrefix='addresses' />
    </NestedFormAsForm>
  )
}