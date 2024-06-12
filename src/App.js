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
// import Checkout from './Components/Checkout';
// import Card from './Components/Card';
// import Demo from './Components/Demo';
// import ProductPage from './Components/ProductPage';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/Home' element={<Hero />}></Route>
        <Route path='/Signup' element={<SignUp />}></Route>
        <Route path='/About-Us' element={<AboutUs />}></Route>
        <Route path='/Contact-Us' element={<Contact />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Products' element={<Products />}></Route>
      </Routes>
      {/* <Checkout /> */}
      {/* <Demo /> */}
      {/* <ProductPage/> */}
      {/* <Card /> */}
      <Footer />
    </div>
  );
}

export default App;
