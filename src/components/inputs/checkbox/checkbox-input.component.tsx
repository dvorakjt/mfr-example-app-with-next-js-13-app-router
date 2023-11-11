import { 
  CheckboxInput as BaseCheckboxInput, 
  CheckboxInputProps as BaseCheckboxInputProps 
} from "modeled-forms-react";
import styles from './styles.module.css';

type CheckboxInputProps = Omit<BaseCheckboxInputProps, 'labelClassName' | 'checkboxClassName'>;

export function CheckboxInput({fieldName, value, labelText} : CheckboxInputProps) {
  return (
    <div className={styles.container}>
      <BaseCheckboxInput fieldName={fieldName} value={value} labelText={labelText}  labelClassName={styles.label} />
    </div>
  )
}