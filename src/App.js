import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './home';
import Cart from './cart';
import Header from './header';

function App() {

  

  return (
    
     <BrowserRouter>
     <Header/>
     <div className="App">
     <Routes>
     <Route path="/" element={<Home/>} exact />
     
     <Route path="/cart" element={<Cart/>} />
     </Routes>
     
     </div>

     </BrowserRouter>
    
    
  );
}

export default App;
