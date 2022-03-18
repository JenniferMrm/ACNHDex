import React from "react";

function InputRadio(props) {
  const { selectedOption, handleChange, label, options } = props;

  return (
    <div className="input-radio">
      <label className="input-radio__label">{label}</label>
      {options.map((option, index) => {
        return (
          <div className="input-radio__input" key={index}>
            <input
              className="input-radio__input__radio"
              type="radio"
              value={option.value}
              onChange={handleChange}
              checked={selectedOption === option.value}
            />
            <label className="input-radio__input__label">{option.label}</label>
          </div>
        );
      })}
    </div>
  );
}

export default InputRadio;
