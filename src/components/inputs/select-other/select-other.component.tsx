import { 
  SelectOther as BaseSelectOther, 
  SelectOtherProps as BaseSelectOtherProps 
} from "modeled-forms-react";
import { PropsWithChildren } from "react";
import styles from './styles.module.css';

type SelectOtherProps = Omit<BaseSelectOtherProps, 'selectProps' | 'inputProps'>;

export function SelectOther({ fieldName, labelText, children} : PropsWithChildren<SelectOtherProps>) {
  return (
    <BaseSelectOther 
      fieldName={fieldName} 
      labelText={labelText}
      selectProps={{
        labelClassName : styles.label,
        selectClassName : styles.select
      }}
      inputProps={{
        labelClassName : styles.input_label,
        inputClassName : styles.input
      }}
    >
      {children}
    </BaseSelectOther>
  )
}