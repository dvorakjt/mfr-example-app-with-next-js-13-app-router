'use client';
import { PageContainer } from "@/components/util/page-container/page-container.component";
import { CredentialsForm } from "@/components/forms/credentials-form.component";
import { FormMessages } from "@/components/messages/form-messages/form-messages.component";

export default function Credentials() {
  return (
    <PageContainer>
      <CredentialsForm />
      <FormMessages idPrefix="rf" />
    </PageContainer>
  );
}