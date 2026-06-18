import { Link } from "react-router-dom";


export default function Barranav({cart}){


return(


<header>


<nav className="
bg-green-600
text-white
p-4
flex
justify-between
items-center
">


<h1 className="font-bold">

Nature Beer

</h1>



<div className="flex gap-5">


<Link to="/">

Inicio

</Link>



<Link to="/carrinho">

Carrinho ({cart.length})

</Link>



<Link to="/checkout">

Checkout

</Link>



</div>


</nav>


</header>


)


}