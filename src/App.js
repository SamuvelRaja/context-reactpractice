import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './home';
import Cart from './cart';
import Header from './header';

function App() {
  return (
    
     <BrowserRouter>
     <Header/>
     <div className="App">
   
     <Route path="/">
       <Home/>
     </Route>
     <Route path="/cart">
     <Cart/>
     </Route>
     </div>
     </BrowserRouter>
    
    
  );
}

export default App;
