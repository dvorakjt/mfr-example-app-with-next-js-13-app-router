import { useEffect } from 'react';
import { OmittableContent } from "modeled-forms-react";
import { RootFormFields, AddressesFields } from "@/form-templates";
import { 
  NestedFormAsForm,
  OmittableFieldController,
  ButtonsContainer,
  ConfirmButton,
  ResetButton,
  FormMessages,
  Spacer,
} from '@/components';
import { AddressFieldset } from "./address-fieldset.component";
import { useRedirectToFirstInvalidNestedForm } from "@/hooks";

import { useRouter } from "next/navigation";

export function AddressesForm() {
  useRedirectToFirstInvalidNestedForm();
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/programming-experience');
  }, [router]);

  return (
    <NestedFormAsForm fieldName={RootFormFields.ADDRESSES} id='addresses'>
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