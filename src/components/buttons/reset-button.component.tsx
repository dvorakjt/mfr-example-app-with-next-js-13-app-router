import { 
  ResetButton as BaseResetButton,
  ResetButtonProps as BaseResetButtonProps,
  PropsWithoutClassName
} from "modeled-forms-react";
import styles from './styles.module.css';

type ResetButtonProps = PropsWithoutClassName<BaseResetButtonProps>;

export function ResetButton(props : ResetButtonProps) {
  return (
    <BaseResetButton {...props} className={styles.button_gray} />
  )
}