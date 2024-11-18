import React from "react";
import Autocomplete from "../Autocomplete";

interface Props {
  name?: string;
  value?: any;
  className?: string;
  label?: string;
  keyValue?: string;
  keyLabel?: string;
  options?: any;
  onChange?: any;
  error?: boolean;
  placeholder?: string;
  helperText?: string;
}

const Select: React.FC<Props> = ({
  name,
  value = "",
  label = "",
  keyValue = "id",
  keyLabel = "label",
  options = [],
  onChange = () => {},
  helperText,
  className,
  placeholder,
  error,
}) => {
  return (
    <Autocomplete
      options={options}
      name={name}
      label={label}
      value={value}
      className={className}
      keyId={keyValue}
      keyText={keyLabel}
      placeholder={placeholder}
      onChange={onChange}
      helperText={helperText}
      error={error}
    />
  );
};

export default Select;
