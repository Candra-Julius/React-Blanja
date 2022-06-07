import React from "react";
import style from './input.module.css'
const Input = ({name,type,placeholder,label,onChange,min,max,value}) => {
  return (
    <div className={style.input}>
    <label htmlFor={label}>{label}</label>
      <input 
      name={name}
      id={label}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      min={min}
      max={max}
      />
    </div>
  );
};

export default Input;
