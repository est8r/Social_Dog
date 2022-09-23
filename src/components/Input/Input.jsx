import React from 'react';
import S from './Input.module.css';

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className={S.geral}>
      <label className={S.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={S.input}
        onBlur={onBlur}
      />
      {error && <p className={S.error}>{error}</p>}
    </div>
  );
};

export default Input;
