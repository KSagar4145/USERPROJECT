import {Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/editProduct/:id' element={<EditProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
