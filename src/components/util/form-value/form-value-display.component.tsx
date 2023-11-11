'use client'
import { useContext } from "react";
import { FormContext } from "modeled-forms-react";
import styles from './styles.module.css';
import { useRedirectToFirstInvalidNestedForm } from "@/hooks/use-redirect-to-first-invalid-nested-form";

export function FormValueDisplay() {
  useRedirectToFirstInvalidNestedForm();

  const formCtx = useContext(FormContext);
  if(!formCtx) throw new Error('FormValueDisplay cannot be rendered outside of a FormContext provider.');

  const { useFormState } = formCtx;
  const { value } = useFormState();
  const valueStr = JSON.stringify(value, null, 2);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>The value of your form:</h2>
      <pre className={styles.form_value_display}>
        {valueStr}
      </pre>
    </div>
  )
}