import { NestedFormAsFieldset } from "modeled-forms-react";
import { CheckboxInput } from "../inputs/checkbox/checkbox-input.component";
import { ProgrammingLanguageFields } from "@/form-templates/programming-languages.template";
import { Spacer } from "../util/spacers/spacer.component";
import styles from './styles.module.css';

interface ProgrammingLanguagesProps {
  fieldName : string;
}

export function ProgrammingLanguagesFieldset({ fieldName } : ProgrammingLanguagesProps) {
  return (
    <NestedFormAsFieldset fieldName={fieldName} className={styles.fieldset}>
      <legend className={styles.legend}>Please select the programming languages you have worked with:</legend>
      <CheckboxInput fieldName={ProgrammingLanguageFields.JAVASCRIPT} labelText="JavaScript" value="JavaScript" />
      <CheckboxInput fieldName={ProgrammingLanguageFields.TYPESCRIPT} labelText="TypeScript" value="TypeScript" />
      <CheckboxInput fieldName={ProgrammingLanguageFields.CSHARP} labelText="C#" value="C#" />
      <CheckboxInput fieldName={ProgrammingLanguageFields.PYTHON} labelText="Python" value="Python" />
      <CheckboxInput fieldName={ProgrammingLanguageFields.PHP} labelText="PHP" value="PHP" />
      <CheckboxInput fieldName={ProgrammingLanguageFields.JAVA} labelText="Java" value="Java" />
      <CheckboxInput fieldName={ProgrammingLanguageFields.CPLUSPLUS} labelText="C++" value="C++" />
      <CheckboxInput fieldName={ProgrammingLanguageFields.C} labelText="C" value="C" />
      <CheckboxInput fieldName={ProgrammingLanguageFields.RUBY} labelText="Ruby" value="Ruby" />
      <CheckboxInput fieldName={ProgrammingLanguageFields.RUST} labelText="Rust" value="Rust" />
    </NestedFormAsFieldset>
  )
} 
