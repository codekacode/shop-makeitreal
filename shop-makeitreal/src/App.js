import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

expimport react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
