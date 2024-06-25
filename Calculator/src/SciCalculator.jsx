import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

const SciCalculator = () => {
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
  };

  const handleDelete = () => {
    setValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleButtonClick = (buttonValue) => {
    setValue((prevValue) => prevValue + buttonValue);
  };

  const handleEquals = () => {
    try {
      const result = eval(value);
      setValue(String(result));
    } catch (error) {
      setValue('Error');
    }
  };

  const scientificFunctions = [
    { label: 'sin', value: 'Math.sin(' },
    { label: 'cos', value: 'Math.cos(' },
    { label: 'tan', value: 'Math.tan(' },
    { label: 'log', value: 'Math.log10(' },
    { label: 'ln', value: 'Math.log(' },
    { label: 'sqrt', value: 'Math.sqrt(' },
    { label: '^', value: '**(' },
    { label: '(', value: '(' },
    { label: ')', value: ')' }
  ];

  const toggleScientificMode = () => {
    setValue(''); // Clear the calculator screen when switching modes
    // You can implement additional logic for toggling between basic and scientific mode
  };

  return (
    <div className='container'>
      <div className='calculator'>
      <div className="sciTagButton">
            <Link to="/Calculator" className="sciTag" onClick={toggleScientificMode}>
                Scientific
            </Link>
        </div>
        <form>
          <div className='screen'>
            <input type='text' value={value} readOnly />
          </div>
          <div className='button-row'>
            <button onClick={() => handleClear()}>AC</button>
            <button onClick={() => handleDelete()}>DE</button>
            <button onClick={() => handleButtonClick('.')}>.</button>
            <button onClick={() => handleButtonClick('/')}>/</button>
          </div>
          <div className='button-row'>
            <button onClick={() => handleButtonClick('7')}>7</button>
            <button onClick={() => handleButtonClick('8')}>8</button>
            <button onClick={() => handleButtonClick('9')}>9</button>
            <button onClick={() => handleButtonClick('x')}>x</button>
          </div>
          <div className='button-row'>
            <button onClick={() => handleButtonClick('4')}>4</button>
            <button onClick={() => handleButtonClick('5')}>5</button>
            <button onClick={() => handleButtonClick('6')}>6</button>
            <button onClick={() => handleButtonClick('+')}>+</button>
          </div>
          <div className='button-row'>
            <button onClick={() => handleButtonClick('1')}>1</button>
            <button onClick={() => handleButtonClick('2')}>2</button>
            <button onClick={() => handleButtonClick('3')}>3</button>
            <button onClick={() => handleButtonClick('-')}>-</button>
          </div>
          {scientificFunctions.map((func) => (
            <button key={func.label} onClick={() => handleButtonClick(func.value)}>
              {func.label}
            </button>
          ))}
          <div className='button-row'>
            <button onClick={() => handleButtonClick('00')}>00</button>
            <button onClick={() => handleButtonClick('0')}>0</button>
            <button className='equalsto' onClick={handleEquals}>=</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SciCalculator;
