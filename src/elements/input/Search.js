import React, { useState } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/css";
import { Input } from "../../index.js";

const Search = (props) => {
  const [data, setData] = useState(props.data ? props.data : []);
  const [value, setValue] = useState("");
  const datas = data;

  function onSearch(newValue) {
    setValue(newValue);
    if (newValue.length) {
      const datasFiltred = filter(datas, props.headCols, newValue);
      props.onChange && props.onChange(datasFiltred);
    } else {
      props.onChange && props.onChange(datas);
    }
  }

  const styleAnimation = {
    input: {
      maxWidth: props.animatedWidth ? "6rem" : "auto",
    },
    "input:focus": {
      maxWidth: props.animatedWidth ? "16rem" : "auto",
    },
  };

  return (
    <Input
      type="search"
      icon="search"
      name="Search"
      fontFamily={props.fontFamily ? props.fontFamily : "inherit"}
      label={props.label}
      description={props.description}
      size={props.size}
      showBtnClear={props.showBtnClear}
      placeholder={props.placeholder}
      backgroundColor={props.backgroundColor}
      autocomplete={props.autocomplete}
      textColor={props.textColor}
      onChange={(event) => onSearch(event.target.value)}
      onClick={props.onClick}
      className={css(styleAnimation) + " " + props.className}
    />
  );
};

function filter(collection = [], filters = [], value = "") {
  const filterKeys = Object.keys(filters);
  return collection.filter((data) => {
    return filterKeys.some((key) => {
      const val = data[key] ? data[key].toString().toLowerCase() : "";
      if (!val.includes("pict")) return val.includes(value.toLowerCase());
    });
  });
}

Search.propTypes = {
  fontFamily: PropTypes.string,
  label: PropTypes.string,
  autocomplete: PropTypes.oneOf(["on", "off"]),
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  headCols: PropTypes.object,
  data: PropTypes.array,
};

Search.defaultProps = {
  fontFamily: "inherit",
  autocomplete: "off",
};

export default Search;
