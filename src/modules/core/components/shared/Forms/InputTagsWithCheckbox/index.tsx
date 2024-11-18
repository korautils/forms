import * as React from "react";
import { Props as AutocompleteProps } from "../Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { get as getProp } from "object-path";

export interface Props extends AutocompleteProps {}
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const InputTagsWithCheckbox: React.FC<Props> = ({
  options,
  limitTags,
  label,
  getOptionLabel,
  keyText = "label",
  placeholder,
}) => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      limitTags={limitTags}
      options={options}
      fullWidth={true}
      size="small"
      disableClearable={true}
      disableCloseOnSelect
      getOptionLabel={
        getOptionLabel
          ? getOptionLabel
          : (option: any) => {
              return Object.keys(option).length ? option[keyText] : "";
            }
      }
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {getProp(option, keyText, "Indefinido")}
        </li>
      )}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
};

export default InputTagsWithCheckbox;
