import React from "react";
import PropTypes from "prop-types";
import { Input } from "../../index.js";
import "./../reset.css";

// Renderers ----------------------------------------------------------------
const DatePicker = (props) => {
  if (!this.props.id) return null;
  return (
    <div className={"input-kariu--wrapper " + this.props.className}>
      <Input
        disabled={this.props.disabled}
        label={this.props.label}
        required={this.props.required}
        className={[
          "input-kariu " + "datePicker-kariu " + this.props.className,
        ].join(" ")}
        onChange={(value) => this.handleChange(value)}
        type="date"
        id={this.props.id}
        name={this.props.name}
        value={this.state.value}
        min={this.props.minValue ? this.props.minValue : "1000-01-01"}
        max={this.props.maxValue ? this.props.maxValue : "3000-12-31"}
      />
    </div>
  );
};

// Listeners ----------------------------------------------------------------
const handleDelete = () => {
  this.setState({ value: "" }, () => {
    this.props.onChange && this.props.onChange(this.state.value);
  });
};

const handleChange = (event) => {
  this.setState({ value: event }, () => {
    this.props.onChange && this.props.onChange(this.state.value);
  });
};

// Fonctions ----------------------------------------------------------------
function getCurrentDate() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  if (day < 10) day = "0" + day;
  let month = currentDate.getMonth();
  if (month < 10) month = "0" + month;
  let year = currentDate.getFullYear();
  let value = `${year}-${month}-${day}`;
  return value;
}

// Définition des propTypes------------------------------------------------------
DatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

DatePicker.defaultProps = {
  id: "default",
  label: "Label",
  name: "pickerName",
};

export default DatePicker;
