import { React, useState } from 'react';

const validacoes = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: 'Preencha um email válido',
  },
};

const useForm = (validacao) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(value) {
    if (validacao === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    }
  }

  return {
    value,
    setValue,
    error,
  };
};

export default useForm;
