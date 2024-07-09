import React from 'react';

const UncontrolledLogin = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    
    if (!username || !password) {
      console.error('Both fields are required.');
      return;
    }

    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Login failed.');
      }

      const data = await response.json();
      console.log('Login successful:', data);

     

    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default UncontrolledLogin;

//El uso de la API de FormData es particularmente ventajoso en formularios más complejos y cuando se manejan archivos, proporcionando una forma más limpia y conveniente de manejar los datos del formulario. Sin embargo, para formularios simples, puede que no siempre sea necesario y podría considerarse una capa adicional de abstracción. La elección entre usar FormData o métodos más directos depende de las necesidades específicas de tu aplicación y de la complejidad del formulario en cuestión.