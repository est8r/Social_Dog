import React from 'react';

const Input = ({ type, name, placeholder, value, onChange, error, onBlur }) => {
  return (
    <div>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
