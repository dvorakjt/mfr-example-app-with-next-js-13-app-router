'use client';
import { PageContainer, FormMessages } from "@/components";
import { ProgrammingExperienceForm } from "@/app/programming-experience/programming-experience-form.component";

export default function Addresses() {
  return (
    <PageContainer>
      <ProgrammingExperienceForm />
      <FormMessages idPrefix="root-form" />
    </PageContainer>
  );
}