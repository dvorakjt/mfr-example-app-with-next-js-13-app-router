import { 
  FieldMessages as BaseFieldMessages, 
  FieldMessagesProps as BaseFieldMessagesProps
} from "modeled-forms-react";
import styles from './styles.module.css';

type FieldMessagesProps = Omit<BaseFieldMessagesProps, "containerClassName" | "messageClassName">;

export function FieldMessages(props : FieldMessagesProps) {
  return (
    <BaseFieldMessages {...props} containerClassName={styles.message_container} messageClassName={styles.message} />
  )
}