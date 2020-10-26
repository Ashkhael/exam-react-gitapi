import React from "react";

export default function Search({ onChange, handleSubmit, searchValue }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        onChange={onChange}
        value={searchValue.value}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}
