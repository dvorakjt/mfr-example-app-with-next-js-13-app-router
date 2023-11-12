import { useEffect } from 'react';
import { ProgrammingExperienceFields, RootFormFields } from "@/form-templates";
import { ProgrammingLanguagesFieldset } from "./programming-languages-fieldset.component";
import {
  NestedFormAsForm,
  Label,
  SelectOther,
  RadioInput,
  FieldMessages,
  ButtonsContainer,
  ResetButton,
  SubmitButton,
  Spacer
} from '@/components';
import { useRedirectToFirstInvalidNestedForm } from "@/hooks/use-redirect-to-first-invalid-nested-form";
import { useRouter } from "next/navigation";

export function ProgrammingExperienceForm() {
  useRedirectToFirstInvalidNestedForm();
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/form-completed');
  }, [router]);

  return (
    <NestedFormAsForm fieldName={RootFormFields.PROGRAMMING_EXPERIENCE}>
      <SelectOther fieldName={ProgrammingExperienceFields.ROLE} labelText="Which role best describes you?">
        <option value="frontend">Frontend Engineer</option>
        <option value="backend">Backend Engineer</option>
        <option value="fullstack">Full Stack Engineer</option>
      </SelectOther>
      <FieldMessages fieldName={ProgrammingExperienceFields.ROLE} />

      <Spacer />

      <ProgrammingLanguagesFieldset fieldName={ProgrammingExperienceFields.LANGUAGES} />

      <Spacer />

      <Label fieldName={ProgrammingExperienceFields.REACT_FRAMEWORKS}>What is your favorite React framework?</Label>
      <RadioInput fieldName={ProgrammingExperienceFields.REACT_FRAMEWORKS} value="next.js" labelText="Next.js" />
      <RadioInput fieldName={ProgrammingExperienceFields.REACT_FRAMEWORKS} value="vite" labelText="Vite" />
      <RadioInput fieldName={ProgrammingExperienceFields.REACT_FRAMEWORKS} value="remix" labelText="Remix" />
      <RadioInput fieldName={ProgrammingExperienceFields.REACT_FRAMEWORKS} value="gatsby" labelText="Gatsby" />
      <RadioInput fieldName={ProgrammingExperienceFields.REACT_FRAMEWORKS} value="none" labelText="I don't have one" />

      <Spacer />

      <ButtonsContainer>
        <ResetButton />
        <SubmitButton onSuccess={() => router.push('/form-completed')}/>
      </ButtonsContainer>
    </NestedFormAsForm>
  )
}