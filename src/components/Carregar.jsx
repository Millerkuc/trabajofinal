import { Link } from "react-router-dom";


export default function Carrinho({cart, remover}){


return(


<main className="
p-5
max-w-4xl
mx-auto
">



<h1 className="
text-3xl
font-bold
mb-5
">

Carrinho

</h1>





{

cart.length === 0 ? (


<p>

Carrinho vazio

</p>


)

:

(


cart.map((produto)=>(



<div


key={produto.id}


className="
bg-slate-800
text-white
p-4
rounded
mb-4
flex
justify-between
items-center
"



>


<div>


<h2 className="font-bold">


{produto.name}


</h2>



<p>


R$ {produto.price}


</p>



</div>





<button


onClick={()=>remover(produto.id)}


className="
bg-red-600
px-4
py-2
rounded
hover:bg-red-700
active:scale-95
transition-all
"


>


Remover


</button>




</div>




))


)


}





<Link


to="/checkout"


className="
bg-green-600
text-white
px-5
py-2
rounded
inline-block
mt-5
hover:bg-green-700
active:scale-95
transition-all
"


>


Finalizar Compra


</Link>



</main>


)


}