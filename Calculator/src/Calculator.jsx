import { useState } from 'react'
import { Link } from 'react-router-dom';

const Calculator = () => {
    const [value, setValue] = useState('');

    const handleClear = () => {
      setValue('');
    };
  
    const handleDelete = () => {
      setValue((prevValue) => prevValue.slice(0, -1));
    };
  
    const handleButtonClick = (e) => {
      const buttonValue = e.target.value;
  
      if (buttonValue === 'x') {
        setValue((prevValue) => prevValue + '*');
      } else {
        setValue((prevValue) => prevValue + buttonValue);
      }
    };
  
    const handleEquals = () => {
      try {
        const result = eval(value); 
        setValue(String(result)); 
      } catch (error) {
        setValue('Error'); 
      }
    };
    return (
      <div className='container'>
        <div className="calculator">
        <div className="sciTagButton">
            <Link to="/scientific-calculator" className="sciTag" onClick={toggleScientificMode}>
                Scientific
            </Link>
        </div>          <form action="">
            <div className='screen'>
              <input type="text" value={value}/>
            </div>
            <div>
            <input type="button" value="AC" onClick={handleClear} />
              <input type="button" value="DE" onClick={handleDelete} />
              <input type="button" value="." onClick={handleButtonClick}/>
              <input type="button" value="/" onClick={handleButtonClick}/>
            </div>
            <div>
              <input type="button" value="7" onClick={handleButtonClick}/>
              <input type="button" value="8" onClick={handleButtonClick}/>
              <input type="button" value="9" onClick={handleButtonClick}/>
              <input type="button" value="x" onClick={handleButtonClick}/>
            </div>
            <div>
              <input type="button" value="4" onClick={handleButtonClick}/>
              <input type="button" value="5" onClick={handleButtonClick}/>
              <input type="button" value="6" onClick={handleButtonClick}/>
              <input type="button" value="+" onClick={handleButtonClick}/>
            </div>
            <div>
              <input type="button" value="1" onClick={handleButtonClick}/>
              <input type="button" value="2" onClick={handleButtonClick}/>
              <input type="button" value="3" onClick={handleButtonClick}/>
              <input type="button" value="-" onClick={handleButtonClick}/>
            </div>
            <div>
              <input type="button" value="00" />
              <input type="button" value="0" />
              <input type="button" value="=" className="equalsto" onClick={handleEquals} />          
            </div>
          </form>
        </div>
      </div>
    )
  }

export default Calculator
