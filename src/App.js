import './App.css';
import React, {useState} from 'react';

function App() {
  let[count, setcount] = useState(0);

    return (
      <div className="App">
          <div id='conjunto'>
              <h1>Contador</h1>
              {
                (count<0)?
                  <p style={{color:'red'}}>{count}</p>:
                (count>0)?
                  <p style={{color:'green'}}>{count}</p>: // Renderização condicional
                  <p style={{color:'black'}}>{count}</p>
              }
              <div id="input">
              <input type="button" className='input' value="Diminuir" onClick={() => setcount(count - 1)}></input>
              <input type="button" className='input' value="Zerar" onClick={() => setcount(count = 0)}></input>
              <input type="button" className='input' value="Aumentar" onClick={() => setcount(count + 1)}></input>
              </div>
          </div>
      </div> 
    );
}

export default App;


