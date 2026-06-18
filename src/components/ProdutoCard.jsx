import {Link} from "react-router-dom";


export default function ProdutoCard({produto,adicionar}){


return(


<div

className="
bg-slate-800
text-white
rounded
p-4
shadow
hover:scale-105
transition-all
"


>


<img

src={produto.image}

alt={produto.name}

className="
h-40
mx-auto
"

 />



<h2 className="font-bold mt-3">

{produto.name}

</h2>



<p>

{produto.description}

</p>



<p>

R$ {produto.price}

</p>



<button

onClick={()=>adicionar(produto)}

className="
bg-green-600
w-full
p-2
rounded
mt-3
hover:bg-green-700
active:scale-95
"

>

Adicionar ao carrinho

</button>



<Link

to={`/produto/${produto.id}`}

className="
block
mt-3
text-center
underline
"

>

Ver detalhes

</Link>



</div>



)

}