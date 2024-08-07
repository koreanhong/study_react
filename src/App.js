import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NavBar from './components/pages/Nav/NavBar'
import User from './components/pages/User/User';
import ProductDetail from './components/pages/Product/ProductsDetail'
import Products from './components/pages/Product/Products';
import Search from './components/pages/Product/Serach';
import './App.css';



const App = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/NavBar">NavBar</Link></li>
          <li><Link to="/User">User</Link></li>
          <li><Link to="/Products">Product</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/NavBar" element={<NavBar />} />
          <Route path="/User/*" element={<User />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/products/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;