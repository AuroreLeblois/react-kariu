import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "../../index.js";
import "./../reset.css";

// Définition des types pour les props
interface DatePickerProps {
  id: string;
  value?: string;
  name?: string;
  label?: string;
  icon?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  minValue?: string;
  maxValue?: string;
  className?: string;
}

// Renderers ----------------------------------------------------------------
function DatePicker({id, value, name, label, icon, required, disabled, onChange, minValue, maxValue, className}: DatePickerProps)  {
  const [value2, setValue] = useState < string > (value||"");

  if (!id) return null;
  return (
    <div className={"input-kariu--wrapper " + className}>
      <Input
      inputProps={{disabled, required, id, name, value: value2}}
        disabled={disabled}
        className={[
          "input-kariu " + "datePicker-kariu " + className,
        ].join(" ")}
        onChange={(event) => handleChange(event)}
        type="date"
        min={minValue ? minValue : "1000-01-01"}
        max={maxValue ? maxValue : "3000-12-31"}
      />
    </div>
  );
};

// Listeners ----------------------------------------------------------------
const handleDelete = () => {
  setValue("");
  onChange && onChange(value2);
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
  onChange && onChange(value);
};

// Fonctions ----------------------------------------------------------------
function getCurrentDate(): string {
  let currentDate = new Date();
  let day = currentDate.getDate();
  if (day < 10) day = "0" + day;
  let month = currentDate.getMonth() + 1; // Ajout de 1 car getMonth() commence à 0
  if (month < 10) month = "0" + month;
  let year = currentDate.getFullYear();
  let value = `${year}-${month}-${day}`;
  return value;
}

// Définition des propTypes------------------------------------------------------
// Remplacé par TypeScript, donc pas nécessaire ici

export default DatePicker;
