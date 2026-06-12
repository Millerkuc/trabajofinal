import {Link} from "react-router-dom";


export default function Barranav({dark,setDark,cart}){


return(

<nav className="p-4 flex justify-between bg-green-600 text-white">


<h1 className="font-bold">
Loja do Gustavo
</h1>


<div className="flex gap-3">


<Link to="/">
Inicio
</Link>


<Link to="/carrinho">
Carrinho ({cart.length})
</Link>


<button

onClick={()=>setDark(!dark)}

className="
bg-black 
px-3 
rounded
active:scale-95
transition
"

>

🍻

</button>


</div>


</nav>


)

}