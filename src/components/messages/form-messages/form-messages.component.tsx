import { 
  FormMessages as BaseFormMessages, 
  FormMessagesProps as BaseFormMessagesProps
} from "modeled-forms-react";
import styles from './styles.module.css';

type FormMessagesProps = Omit<BaseFormMessagesProps, "containerClassName" | "messageClassName">;

export function FormMessages(props : FormMessagesProps) {
  return (
    <BaseFormMessages {...props} containerClassName={styles.message_container} messageClassName={styles.message} />
  )
}