import { 
  RadioInput as BaseRadioInput, 
  RadioInputProps as BaseRadioInputProps 
} from "modeled-forms-react";
import styles from './styles.module.css';

type RadioInputProps = Omit<BaseRadioInputProps, 'labelClassName' | 'RadioClassName'>;

export function RadioInput({fieldName, value, labelText} : RadioInputProps) {
  return (
    <div className={styles.container}>
      <BaseRadioInput fieldName={fieldName} value={value} labelText={labelText}  labelClassName={styles.label} />
    </div>
  )
}