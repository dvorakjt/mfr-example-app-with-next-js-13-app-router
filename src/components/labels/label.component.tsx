import { Label as BaseLabel, LabelProps as BaseLabelProps, PropsWithoutClassName} from 'modeled-forms-react';
import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

type LabelProps = PropsWithoutClassName<BaseLabelProps>;

export function Label({fieldName, children}: PropsWithChildren<LabelProps>) {
  return (
    <BaseLabel fieldName={fieldName} className={styles.label}>
      {children as any}
    </BaseLabel>
  );
}