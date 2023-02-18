import { Outlet } from 'react-router-dom';
import './App.css';
import { CartContextProvider } from './context/cart_contex';
import HeaderAndBanner from './pages/header_and_banner/header_and_banner';

function App() {

  return (
    <CartContextProvider>
      <div className="App">
        <HeaderAndBanner />
        <Outlet />
      </div>
    </CartContextProvider>
  );
}

export default App;
