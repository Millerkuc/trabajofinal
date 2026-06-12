import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Barranav.jsx";

import Home from "./Pages/Home.jsx";
import Produto from "./Pages/Produto.jsx";
import Carrinho from "./Pages/Carrinho.jsx";
import Checkout from "./Pages/Checkout.jsx";

import { useState } from "react";


function App() {


  const [cart,setCart] = useState([]);



  function adicionar(produto){

    setCart([
      ...cart,
      produto
    ]);

  }



  return (

    <BrowserRouter>


      <Navbar cart={cart}/>



      <Routes>


        <Route 
        path="/" 
        element={
          <Home adicionar={adicionar}/>
        }
        />



        <Route 
        path="/produto/:id" 
        element={
          <Produto adicionar={adicionar}/>
        }
        />



        <Route 
        path="/carrinho" 
        element={
          <Carrinho cart={cart}/>
        }
        />



        <Route 
        path="/checkout" 
        element={
          <Checkout/>
        }
        />


      </Routes>


    </BrowserRouter>

  )

}


export default App;