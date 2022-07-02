import  Decrease  from "./decrease";
import  Increase  from "./increase";
import { useState } from 'react';
import Count from './num';

function Counter() {

  const [number, setnumber] = useState(0)

  const increaseNum = () => {
    setnumber(number + 1)
  }
  const decreaseNum = () => {
    setnumber(number - 1)
  }
  const resetNum = () => {
    setnumber(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Count num = {number}/>
        <div>
          <Increase Increase= {increaseNum}/>
          <Decrease Decrease = {decreaseNum}/>
        </div>
        <button onClick={resetNum}>
          Reset
        </button>
      </header>
    </div>
  );
}

export default Counter;
