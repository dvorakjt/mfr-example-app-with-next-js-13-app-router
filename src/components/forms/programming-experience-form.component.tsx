'use client';
import { NestedFormAsForm } from "modeled-forms-react";
import { Label } from "../labels/label.component";
import { SelectOther } from "../inputs/select-other/select-other.component";
import { ProgrammingLanguagesFieldset } from "./programming-languages-fieldset.component";
import { RadioInput } from "../inputs/radio/radio-input.component";
import { RootFormFields } from "@/form-templates/root-form.template";
import { ProgrammingExperienceFields } from "@/form-templates/programming-experience.template";
import { Spacer } from "../util/spacers/spacer.component";
import { ButtonsContainer } from "../util/buttons-container/buttons-container.component";
import { ResetButton } from "../buttons/reset-button.component";
import { SubmitButton } from "../buttons/submit-button.component";
import { FieldMessages } from "../messages/field-messages/field-messages.component";
import { useRouter } from "next/navigation";
import styles from './styles.module.css';
import { useRedirectToFirstInvalidNestedForm } from "@/hooks/use-redirect-to-first-invalid-nested-form";

export function ProgrammingExperienceForm() {
  useRedirectToFirstInvalidNestedForm();
  const router = useRouter();

  return (
    <NestedFormAsForm fieldName={RootFormFields.PROGRAMMING_EXPERIENCE} className={styles.form}>
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