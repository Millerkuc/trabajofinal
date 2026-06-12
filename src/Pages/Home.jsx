import cev1 from "../assets/cev1.png";
import cev2 from "../assets/cev2.png";
import cev3 from "../assets/cev3.png";
import cev5 from "../assets/cev5.png";

import ProductCard from "../components/ProdutoCard";


export default function Home({adicionar}){


const produtos = [


{
id:1,
name:"Nature Beer",
description:"Cerveja natural feita com ingredientes naturais.",
details:"Produção artesanal focada em qualidade e sustentabilidade.",
volume:"500ml",
price:10.90,
image:cev1
},


{
id:2,
name:"Nature Beer",
description:"Cerveja natural feita com ingredientes naturais.",
details:"Produção artesanal focada em qualidade e sustentabilidade.",
volume:"500ml",
price:10.90,
image:cev2
},


{
id:3,
name:"Nature Beer",
description:"Cerveja natural feita com ingredientes naturais.",
details:"Produção artesanal focada em qualidade e sustentabilidade.",
volume:"500ml",
price:10.90,
image:cev3
},



{
id:5,
name:"Nature Beer",
description:"Cerveja natural feita com ingredientes naturais.",
details:"Produção artesanal focada em qualidade e sustentabilidade.",
volume:"500ml",
price:10.90,
image:cev5
}

];






return(

<main className="p-5">


<h1 className="text-3xl font-bold mb-5">

Cervejas Ecológicas

</h1>


<div className="
grid 
grid-cols-1 
md:grid-cols-3 
gap-5
">


{

produtos.map((produto)=>(


<ProductCard

key={produto.id}

produto={produto}

adicionar={adicionar}

/>


))

}


</div>


</main>

)


}