import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";


export default function Produto({adicionar}){


const {id}=useParams();


const [produto,setProduto]=useState(null);



useEffect(()=>{


const lista = JSON.parse(
localStorage.getItem("produtos")
) || [];



const encontrado = lista.find(

p=>p.id == id

);



setProduto(encontrado);



},[id]);




if(!produto){


return(

<h2 className="p-5">

Produto não encontrado

</h2>

)

}




return(


<main className="p-5">



<img

src={produto.image}

alt={produto.name}

className="h-60 mx-auto"

/>




<h1 className="
text-3xl
font-bold
mt-5
">


{produto.name}


</h1>




<p>

{produto.description}

</p>




<h2 className="mt-5 font-bold">


R$ {produto.price}


</h2>





<button


onClick={()=>adicionar(produto)}


className="
bg-green-600
text-white
px-5
py-2
rounded
mt-5
hover:bg-green-700
active:scale-95
transition-all
"


>


Adicionar ao carrinho


</button>



</main>


)


}