import './App.css';
import logo from './img/logo.jpg';
import Boton from './componentes/boton';
import Funcionamiento from './componentes/funcionamiento';
import BtnClear from './componentes/botonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'; //para usar evaluate

function App() {
  const[input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      try {
        const result = new Function('return ' + input)();
        if (isNaN(result) || !isFinite(result)) {
          throw new Error('Operación no válida');
        }
        setInput(result.toString());
      } catch (error) {
        alert('Error: ' + error.message);
        setInput('');
      }
    } else {
      alert('Por favor ingresa valores');
    }
  };

  return (
    <div className="App">
      <div className='logoContenedor'>
        <img 
          src={logo}
          className='logo'
          alt='Logo de calculadora'
        />
      </div>
      <div className='contenedorCalculadora'>
        <Funcionamiento 
          input={input}  
          />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div> 
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div> 
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>  
        <div className='fila'>
          <BtnClear manejarClear={() => setInput('')}>Clear</BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;
