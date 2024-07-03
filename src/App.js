import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Products from './Components/Products'
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Checkout from './Components/Checkout';
import { Provider, useSelector } from 'react-redux';
import { store } from './Components/State/Store';
import MainNav from './Components/MainNav';
// import Navbar3 from './Components/Navbar3';
// import Card from './Components/Card';
// import Demo from './Components/Demo';
// import ProductPage from './Components/ProductPage';
// import Navbar2 from './Components/Navbar2';

function App() {
  const isOpen = useSelector((state) => state.toggle);
  console.log(isOpen);

  return (
    <div className="App">
      <MainNav />
      {/* <Navbar /> */}
      {/* <Navbar3 /> */}
      {/* <Navbar2 /> */}
      <Checkout />
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/Home' element={<Hero />}></Route>
        <Route path='/Signup' element={<SignUp />}></Route>
        <Route path='/About-Us' element={<AboutUs />}></Route>
        <Route path='/Contact-Us' element={<Contact />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Products' element={<Products />}></Route>
      </Routes>
      {isOpen && <Checkout />}
      {/* <Demo /> */}
      {/* <ProductPage /> */}
      {/* <Card /> */}
      <Footer />

    </div>
  );
}

export default App;
