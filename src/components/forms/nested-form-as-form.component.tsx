import { 
  NestedFormAsForm as BaseNestedFormAsForm, 
  NestedFormAsFormProps as BaseNestedFormAsFormProps, 
  PropsWithoutClassName
} from "modeled-forms-react";
import { PropsWithChildren } from "react";
import styles from './styles.module.css';

type NestedFormAsFormProps = PropsWithoutClassName<BaseNestedFormAsFormProps>;

export function NestedFormAsForm(props : PropsWithChildren<NestedFormAsFormProps>) {
  return (
    <BaseNestedFormAsForm {...props} className={styles.form}>
      {props.children}
    </BaseNestedFormAsForm>
  );
}