import { Link } from "react-router-dom";


export default function ProdutoCard({ produto, adicionar }) {


    return (


        <article className="
        border
        rounded-lg
        shadow
        p-4
        bg-white
        dark:bg-gray-800
        transition
        hover:scale-105
        ">


            <img

                src={produto.image}

                alt={`Imagem da cerveja ${produto.name}`}

                className="
                h-48
                w-full
                object-contain
                mb-4
                "

            />



            <h2 className="
            font-bold
            text-xl
            ">

                {produto.name}

            </h2>




            <p className="
            text-gray-600
            dark:text-gray-300
            mt-2
            ">

                {produto.description}

            </p>




            <p className="
            font-bold
            mt-3
            ">

                R$ {produto.price.toFixed(2)}

            </p>





            <button

                onClick={() => adicionar(produto)}

                className="
                bg-green-600
                text-white
                px-4
                py-2
                rounded
                mt-4
                w-full
                active:scale-95
                transition
                "

            >

                Adicionar ao carrinho

            </button>





            



        </article>


    )


}