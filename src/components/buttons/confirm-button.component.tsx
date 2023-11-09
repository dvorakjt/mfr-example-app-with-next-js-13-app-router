import {
  ConfirmButton as BaseConfirmButton,
  ConfirmButtonProps as BaseConfirmButtonProps,
  PropsWithoutClassName
} from 'modeled-forms-react';
import styles from './styles.module.css';
import { PropsWithChildren } from 'react';

type ConfirmButtonProps = PropsWithoutClassName<BaseConfirmButtonProps>;

export function ConfirmButton(props : PropsWithChildren<ConfirmButtonProps>) {
  return (
    <BaseConfirmButton {...props} className={styles.button_blue}>Confirm</BaseConfirmButton>
  )
}