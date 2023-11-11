import { 
  SubmitButton as BaseSubmitButton, 
  SubmitButtonProps as BaseSubmitButtonProps, 
  PropsWithoutClassName 
} from "modeled-forms-react";
import styles from './styles.module.css';

type SubmitButtonProps = PropsWithoutClassName<BaseSubmitButtonProps>;

export function SubmitButton(props : SubmitButtonProps) {
  return (
    <BaseSubmitButton {...props} className={styles.button_blue} />
  )
}