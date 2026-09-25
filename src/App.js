import logo from './logo.svg';
import './App.css';
import DemoState from './components/DemoState';
import DemoRef from './components/DemoRef';
import DemoMemo from './components/DemoMemo';
import DemoState1 from './baitap12_15/DemoState1';
import UserPost from './baitap12_15/demoEffect/UserPost';
import CountdownTimer from './baitap12_15/demoEffect/CountdownTimer';
import Theme from './baitap12_15/demoContext/Theme';
import { ThemeProvider } from './baitap12_15/demoContext/ThemeContext';
import { CartProvider } from './baitap12_15/demoContext/CartContext';
import DishesList from './baitap12_15/demoContext/DishesList';
import Cart from './baitap12_15/demoContext/Cart';

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider>
        <Theme />
      </ThemeProvider> */}
      <CartProvider>
        <DishesList />
        <hr />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
