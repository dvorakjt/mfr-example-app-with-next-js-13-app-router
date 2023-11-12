import {
  NestedFormAsFieldset as BaseNestedFormAsFieldset,
  NestedFormAsFieldsetProps as BaseNestedFormAsFieldsetProps,
  PropsWithoutClassName
} from 'modeled-forms-react';
import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

type NestedFormAsFieldsetProps = PropsWithoutClassName<BaseNestedFormAsFieldsetProps>;

export function NestedFormAsFieldset(props : PropsWithChildren<NestedFormAsFieldsetProps>) {
  return (
    <BaseNestedFormAsFieldset {...props} className={styles.fieldset}>
      {props.children}
    </BaseNestedFormAsFieldset>
  )
}