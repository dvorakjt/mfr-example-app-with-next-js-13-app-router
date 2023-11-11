import { NestedFormTemplate } from "modeled-forms-react";

export enum ProgrammingLanguageFields {
  JAVASCRIPT = 'javascript',
  TYPESCRIPT = 'typescript',
  CSHARP = 'cSharp',
  PYTHON = 'python',
  PHP = 'php',
  RUBY = 'ruby',
  JAVA = 'java',
  CPLUSPLUS = 'cPlusPlus',
  C = 'c',
  RUST = 'rust'
}

export const programmingLanguagesTemplate : NestedFormTemplate = {
  fields : new Map(Object.values(ProgrammingLanguageFields).map((fieldName) => [fieldName, '']))
}