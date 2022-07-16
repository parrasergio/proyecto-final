import './App.css';
import NavBar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContaine';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification'
import Cart from './components/Cart/Cart';

function App() {
 
  return (
    <div className="App">
            <NotificationProvider>
          <h1>Electronica Filomeno</h1>
          <CartProvider>
            <BrowserRouter>
              <NavBar/>
              <Routes>
              <Route path='/' element={<ItemListContainer greating='Lo que Necesites'/>} />
              <Route path='/category/:categoryId' element={<ItemDetailContainer/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart />} />
              
              </Routes>
            </BrowserRouter>
            </CartProvider>
            </NotificationProvider>
    </div>
  );
}

export default App;