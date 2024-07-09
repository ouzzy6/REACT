import React from 'react';
import ReactDOM from 'react-dom';
import FocusableInput from './components/focusableInput';
import FirstMountMessage from './components/printMessage';
import Counter from './components/counter';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Focusable Input</h1>
        <FocusableInput />
        
        <h1>First Mount Message</h1>
        <FirstMountMessage />
        
        <h1>Counter</h1>
        <Counter initialValue={0} />
      </div>
    </React.StrictMode>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));