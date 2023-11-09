'use client';
import { RootFormProvider as BaseRootFormProvider } from "modeled-forms-react";
import { rootFormTemplate } from "@/form-templates/root-form.template";
import { PropsWithChildren } from "react";

export function RootFormProvider({ children } : PropsWithChildren) {
  return (
    <BaseRootFormProvider template={rootFormTemplate}>
      {children as any}
    </BaseRootFormProvider>
  )
}