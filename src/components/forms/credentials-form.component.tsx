'use client';
import { NestedFormAsForm } from "modeled-forms-react";
import { Label } from "../labels/label.component";
import { Input } from "../inputs/input/input.component";
import { FieldMessages } from "../messages/field-messages/field-messages.component";
import { FormMessages } from "../messages/form-messages/form-messages.component";
import { ButtonsContainer } from "../util/buttons-container/buttons-container.component";
import { ConfirmButton } from "../buttons/confirm-button.component";
import { ResetButton } from "../buttons/reset-button.component";
import { RootFormFields } from "@/form-templates/root-form.template";
import { CredentialsFields } from "@/form-templates/credentials.template";
import { Spacer } from "../util/spacers/spacer.component";
import { useRouter } from "next/navigation";
import styles from './styles.module.css';

export function CredentialsForm() {
  const router = useRouter();

  return (
    <NestedFormAsForm fieldName={RootFormFields.CREDENTIALS} id='credentials' className={styles.form}>
      <Label fieldName={CredentialsFields.NAME}>Name</Label>
      <Input type='text' fieldName={CredentialsFields.NAME} />
      <FieldMessages fieldName={CredentialsFields.NAME} />

      <Spacer />

      <Label fieldName={CredentialsFields.EMAIL}>Email</Label>
      <Input type='email' fieldName={CredentialsFields.EMAIL} />
      <FieldMessages fieldName={CredentialsFields.EMAIL} />

      <Spacer />

      <Label fieldName={CredentialsFields.PASSWORD}>Password</Label>
      <Input type='password' fieldName={CredentialsFields.PASSWORD} />
      <FieldMessages fieldName={CredentialsFields.PASSWORD} />

      <Spacer />

      <Label fieldName={CredentialsFields.CONFIRM_PASSWORD}>Re-enter Password</Label>
      <Input type='password' fieldName={CredentialsFields.CONFIRM_PASSWORD} />
      <FieldMessages fieldName={CredentialsFields.CONFIRM_PASSWORD} />

      <Spacer />

      <FormMessages idPrefix="credentials"/>

      <Spacer />

      <ButtonsContainer>
        <ResetButton />
        <ConfirmButton onSuccess={() => router.push('/addresses')}>Continue</ConfirmButton>
      </ButtonsContainer>
    </NestedFormAsForm>
  );
}