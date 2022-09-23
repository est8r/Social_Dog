import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import useForm from '../../hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../service/api';

const LoginForm = () => {
  const username = useForm();
  const senha = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    conseole.log(json);
  }

  //POST
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && senha.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        senha: senha.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      console.log(json);
      getUser(json.token);
    }
  };

  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input
          label="Nome"
          name="username"
          type="text"
          value={username}
          placeholder="Digite seu nome.."
          {...username}
        />
        <Input
          label="Senha"
          name="senha"
          type="password"
          value={senha}
          placeholder="Digite sua senha.."
          {...senha}
        />

        <Button texto="Enviar" />
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
