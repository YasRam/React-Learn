import './App.css';
import Navbar from './navBar';
import Home from './Home';
import ListItems from './Shop';
import Aboutme from './Aboutme';
import Counter from './pro';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Item from './Shop/item';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/count' element={<Counter />} />
        <Route path='/shop' element={<ListItems />} />
        <Route path='/aboutme' element={<Aboutme />} />
        <Route path='/item/:id' element={<Item />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;