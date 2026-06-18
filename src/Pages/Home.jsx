import cev1 from "../assets/cev1.png";
import cev2 from "../assets/cev2.png";
import cev3 from "../assets/cev3.png";
import cev5 from "../assets/cev5.png";


import ProdutoCard from "../components/ProdutoCard";



export default function Home({adicionar}){


const produtos=[

{
id:1,
name:"Nature Beer",
description:"Cerveja natural feita com ingredientes naturais.",
price:10.90,
image:cev1
},


{
id:2,
name:"Nature Beer",
description:"Produção artesanal sustentável.",
price:12.90,
image:cev2
},


{
id:3,
name:"Nature Beer",
description:"Cerveja ecológica.",
price:15,
image:cev3
},


{
id:5,
name:"Nature Beer",
description:"Cerveja premium.",
price:20,
image:cev5
}


];



return(

<main className="
p-5
max-w-5xl
mx-auto
">


<h1 className="
text-3xl
font-bold
mb-5
">

Cervejas Ecológicas

</h1>



<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-5
">


{

produtos.map(p=>(

<ProdutoCard

key={p.id}

produto={p}

adicionar={adicionar}

/>


))


}


</div>


</main>


)


}