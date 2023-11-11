'use client';
import { PageContainer } from "@/components/util/page-container/page-container.component";
import { ProgrammingExperienceForm } from "@/components/forms/programming-experience-form.component";
import { FormMessages } from "@/components/messages/form-messages/form-messages.component";

export default function Addresses() {
  return (
    <PageContainer>
      <ProgrammingExperienceForm />
      <FormMessages idPrefix="root-form" />
    </PageContainer>
  );
}