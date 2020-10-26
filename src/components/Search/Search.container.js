import React, { useState } from "react";
import Component from "./Search.component";
import PropTypes from "prop-types";

export default function Search(props) {
  const [searchValue, setSearchValue] = useState({
    input: "",
  });

  const onChange = (event) => {
    setSearchValue({ ...searchValue, input: event.target.value });
    console.log(searchValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(searchValue.input);
  };

  Search.propTypes = {
    input: PropTypes.string,
  };

  Search.defaultProps = {
    input: "Example",
  };

  return (
    <Component
      onChange={onChange}
      handleSubmit={handleSubmit}
      searchValue={searchValue}
    />
  );
}
