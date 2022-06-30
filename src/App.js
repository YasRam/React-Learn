import './App.css';
import Navbar from './componant/navBar';
import Home from './componant/Home';
import ListItems from './componant/Shop';
import Aboutme from './componant/Aboutme';
import Counter from './componant/pro';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Item from './componant/Shop/item';
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './pages/todo/Todo'
// import Todo from './componant/todo'


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
        <Route path='/todo' element={<Todo />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;