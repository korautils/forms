import { Props as AutocompleteProps } from "../Autocomplete";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export interface Props extends AutocompleteProps {}

const InputTags: React.FC<Props> = ({
  options,
  limitTags,
  getOptionLabel,
  keyText = "label",
  label,
  placeholder,
}) => {
  return (
    <Autocomplete
      multiple
      disableClearable={true}
      size="small"
      limitTags={limitTags}
      options={options}
      getOptionLabel={
        getOptionLabel
          ? getOptionLabel
          : (option: any) => {
              return Object.keys(option).length ? option[keyText] : "";
            }
      }
      defaultValue={[]}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
};

export default InputTags;
