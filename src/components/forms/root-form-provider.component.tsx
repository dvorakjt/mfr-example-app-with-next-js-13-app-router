'use client';
import { RootFormProvider as BaseRootFormProvider } from "modeled-forms-react";
import { rootFormTemplate } from "@/form-templates/root-form.template";
import { ReactNode } from "react";

interface RootFormProps {
  children? : ReactNode
}

export function RootFormProvider({ children } : RootFormProps) {
  return (
    <BaseRootFormProvider template={rootFormTemplate} >
      {children}
    </BaseRootFormProvider>
  )
}