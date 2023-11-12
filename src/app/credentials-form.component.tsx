import { CredentialsFields, RootFormFields } from "@/form-templates";
import {
  NestedFormAsForm,
  Label,
  Input,
  FieldMessages,
  FormMessages,
  ButtonsContainer,
  ConfirmButton,
  ResetButton,
  Spacer
} from '@/components';
import { useRouter } from "next/navigation";

export function CredentialsForm() {
  const router = useRouter();
  
  return (
    <NestedFormAsForm fieldName={RootFormFields.CREDENTIALS} id='credentials'>
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

      <ButtonsContainer>
        <ResetButton />
        <ConfirmButton onSuccess={() => router.push('/addresses')}>Continue</ConfirmButton>
      </ButtonsContainer>

      <Spacer />

      <FormMessages idPrefix="credentials"/>
    </NestedFormAsForm>
  );
}