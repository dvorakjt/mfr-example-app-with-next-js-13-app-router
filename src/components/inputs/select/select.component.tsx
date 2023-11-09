import { 
  Select as BaseSelect, 
  SelectProps as BaseSelectProps, 
  PropsWithoutClassName 
} from 'modeled-forms-react';
import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

type SelectProps = PropsWithoutClassName<BaseSelectProps>;

export function Select(props : PropsWithChildren<SelectProps>) {
  return (
    <BaseSelect {...props} className={styles.select}>
      {props.children}
    </BaseSelect>
  )
}