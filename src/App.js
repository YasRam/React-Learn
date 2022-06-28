import './App.css';
import  Decrease  from "./pro/decrease";
import  Increase  from "./pro/increase";
import { useState } from 'react';
import Count from './pro/count';

function App() {

  const [number, setnumber] = useState(0)

  const increaseNum = () => {
    setnumber(number + 1)
    console.log("sss")
  }
  const decreaseNum = () => {
    setnumber(number - 1)
    console.log("ooo")
  }
  const resetNum = () => {
    setnumber(0)
    console.log("ccc")
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

export default App;






// // import logo from './logo.svg';
// import './App.css';
// // import { Count } from "./pro/count";
// // import { Decrease } from "./pro/decrease";
// // import { Increase } from "./pro/increase";
// import { useState } from 'react';

// function App() {

//   const [number, setnumber] = useState(0)

//   const increaseNum = () => {
//     setnumber(number + 1)
//     console.log("sss")
//   }
//   const decreaseNum = () => {
//     setnumber(number - 1)
//     console.log("ooo")
//   }
//   const resetNum = () => {
//     setnumber(0)
//     console.log("ccc")
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{number}</p>
//         <div>
//           <button onClick={increaseNum}>
//             +
//           </button>
//           <button onClick={decreaseNum}>
//             -
//           </button>
//         </div>
//         <button onClick={resetNum}>
//           Reset
//         </button>
//       </header>
//     </div>
//   );
// }

// export default App;

