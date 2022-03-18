import React from "react";

function InputSearch(props) {
  const { searchValue, handleChange } = props;

  return (
    <div className="input-search">
      <input className="input-search__input input" value={searchValue} type="text" placeholder="Name" onChange={handleChange} />
    </div>
  );
}

export default InputSearch;
