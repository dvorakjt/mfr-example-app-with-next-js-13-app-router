import { NestedFormAsFieldset } from "modeled-forms-react";
import { AddressFields } from "@/form-templates/address.template";
import { Label } from "../labels/label.component";
import { Input } from "../inputs/input/input.component";
import { Select } from "../inputs/select/select.component";
import { FieldMessages } from "../messages/field-messages/field-messages.component";
import { Spacer } from "../util/spacers/spacer.component";
import { US_STATE_ABBREVIATIONS } from "@/form-templates/util/us-states/us-state-abbreviations";
import styles from './styles.module.css';

interface AddressFieldsetProps {
  fieldName : string;
  legend : string;
}

export function AddressFieldset({ fieldName, legend } : AddressFieldsetProps) {
  return (
    <NestedFormAsFieldset fieldName={fieldName} className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>

      <Spacer />

      <Label fieldName={AddressFields.STREET_LINE_1}>Street Address Line 1</Label>
      <Input type='text' fieldName={AddressFields.STREET_LINE_1} />
      <FieldMessages fieldName={AddressFields.STREET_LINE_1} />

      <Spacer />

      <Label fieldName={AddressFields.STREET_LINE_2}>Street Address Line 2</Label>
      <Input type='text' fieldName={AddressFields.STREET_LINE_2} />

      <Spacer />

      <Label fieldName={AddressFields.CITY}>City</Label>
      <Input type='text' fieldName={AddressFields.CITY} />
      <FieldMessages fieldName={AddressFields.CITY} />

      <Spacer />

      <div className={styles.input_row}>

        <div>
          <Label fieldName={AddressFields.ZIP}>Zip</Label>
          <Input type='text' fieldName={AddressFields.ZIP} style={{ width : '240px', marginRight : '10px'}}/>
          <FieldMessages fieldName={AddressFields.ZIP} />
        </div>

        <div>
          <Label fieldName={AddressFields.STATE}>State</Label>
          <Select fieldName={AddressFields.STATE} style={{width : '50px'}}>
            {US_STATE_ABBREVIATIONS.map((abbr) => {
              return (
                <option value={abbr} key={abbr}>{abbr}</option>
              )
            })}
          </Select>
        </div>

      </div>
    </NestedFormAsFieldset>
  )
}