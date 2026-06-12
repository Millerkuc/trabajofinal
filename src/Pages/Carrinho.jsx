import { Link } from "react-router-dom";


export default function Carrinho({ cart }) {


    return (

        <main className="p-5">


            <h1 className="text-2xl font-bold mb-5">

                Carrinho

            </h1>



            {

                cart.length === 0 ? (

                    <p>
                        Carrinho vazio
                    </p>


                ) : (


                    cart.map((p, i) => (


                        <div 
                        key={i}
                        className="
                        border 
                        p-3 
                        mb-3
                        rounded
                        "
                        >


                            <h2 className="font-bold">

                                {p.title}

                            </h2>


                            <p>

                                R$ {p.price}

                            </p>


                        </div>


                    ))


                )

            }




            <Link

                to="/checkout"

                className="
                bg-green-600
                text-white
                px-4
                py-2
                rounded
                inline-block
                "

            >

                Finalizar Compra


            </Link>



        </main>


    )

}