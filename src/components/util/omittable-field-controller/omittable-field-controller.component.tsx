import { useContext } from "react";
import { FormContext } from "modeled-forms-react";
import styles from './styles.module.css';

interface OmittableFieldControllerProps {
  fieldName : string;
  labelText : string;
}

export function OmittableFieldController({ fieldName, labelText} : OmittableFieldControllerProps) {
  const formCtx = useContext(FormContext);
  if(!formCtx) throw new Error('Cannot render OmittableFieldController outside of FormContext.');

  const { useOmittableFormElement } = formCtx;

  const { omitFormElement, setOmitFormElement } = useOmittableFormElement(fieldName);

  return (
    <>
      <input type='checkbox' onChange={() => setOmitFormElement(!omitFormElement)} checked={!omitFormElement} id={`omit-${fieldName}`} />
      <label htmlFor={`omit-${fieldName}`} className={styles.label}>{labelText}</label>
    </>
  );
}