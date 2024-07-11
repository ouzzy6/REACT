import React from 'react';
import Container from './components/container';

const App = () => {
  return (
    <div>
      <Container title="Título del Contenedor">
        <p>Buenas tardes</p>
        <p>Que calor</p>
      </Container>
      <Container title="Otro Contenedor">
        <p>Comprar pinguino</p>
      </Container>
    </div>
  );
};

export default App;
