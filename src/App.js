import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./Links/Home";
import Cart from "./Links/Cart";

function App() {
  return (
    <div className="App">

      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
