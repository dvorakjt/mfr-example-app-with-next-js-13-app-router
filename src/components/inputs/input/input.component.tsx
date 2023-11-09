import { Input as BaseInput, InputProps as BaseInputProps, PropsWithoutClassName} from "modeled-forms-react";
import styles from './styles.module.css';

type InputProps = PropsWithoutClassName<BaseInputProps>;

export function Input(props : InputProps) {
  return <BaseInput {...props} className={styles.input} />
}