import { ProgrammingLanguageFields } from "@/form-templates";
import { 
  NestedFormAsFieldset,
  Legend,
  CheckboxInput 
} from "@/components";

interface ProgrammingLanguagesProps {
  fieldName : string;
}

export function ProgrammingLanguagesFieldset({ fieldName } : ProgrammingLanguagesProps) {
  return (
    <NestedFormAsFieldset fieldName={fieldName}>
      <Legend>Please select the programming languages you have worked with:</Legend>
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
