import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Barranav.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./Pages/Home.jsx";
import Produto from "./Pages/Produto.jsx";
import Carrinho from "./Pages/Carrinho.jsx";
import Checkout from "./Pages/Checkout.jsx";

import { useState } from "react";



function App(){


const [cart,setCart] = useState([]);




function adicionar(produto){


setCart([

...cart,

produto

]);


}





function remover(id){


setCart(

cart.filter(

produto => produto.id !== id

)

);


}






return(


<BrowserRouter>



<div className="
min-h-screen
flex
flex-col
">





<header>

<Navbar cart={cart}/>

</header>





<main className="
flex-1
">


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

<Carrinho

cart={cart}

remover={remover}

/>

}

/>




<Route

path="/checkout"

element={

<Checkout/>

}

/>




<Route

path="*"

element={

<h1 className="
text-center
text-3xl
mt-10
">

Ops! Esta página não existe

</h1>

}

/>



</Routes>


</main>





<Footer/>




</div>



</BrowserRouter>



)


}



export default App;