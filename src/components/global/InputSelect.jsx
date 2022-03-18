import React from "react";

function InputSelect(props) {
  const { searchValue, handleChange, options, label } = props;

  return (
    <div className="input-select">
      <label className="input-select__label">
        {label}
        <select className="input-select__label__input input" value={searchValue} onChange={handleChange}>
          <option value="">All</option>
          {options.map((option, index) => {
            return <option key={index} value={option} label={option} />;
          })}
        </select>
      </label>
    </div>
  );
}

export default InputSelect;
