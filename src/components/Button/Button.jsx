import React from 'react';
import S from './Button.module.css';

const Button = ({ texto, ...props }) => {
  return (
    <button {...props} className={S.button}>
      {texto}
    </button>
  );
};

export default Button;
