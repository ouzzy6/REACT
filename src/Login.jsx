import React, { useState } from 'react';

const Login = () => {
  // Definir los estados para los inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  // Manejar el cambio en el input de username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Manejar el cambio en el input de password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Manejar el cambio en el checkbox de remember
  const handleRememberChange = (e) => {
    setRemember(e.target.checked);
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario, como autenticación
    console.log({ username, password, remember });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <div>
        <label>
          Remember me:
          <input
            type="checkbox"
            checked={remember}
            onChange={handleRememberChange}
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
