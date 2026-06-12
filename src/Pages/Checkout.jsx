import { useState } from "react";


export default function Checkout(){


    const [email,setEmail] = useState("");

    const [senha,setSenha] = useState("");

    const [mensagem,setMensagem] = useState("");



    const emailValido = email.includes("@");


    const senhaValida = senha.length >= 6;



    const formularioValido = emailValido && senhaValida;




    function finalizarCompra(){


        setMensagem("Pedido enviado com sucesso! 🍺");


    }




    return(


        <main className="p-5 max-w-md mx-auto">


            <h1 className="
            text-3xl
            font-bold
            mb-5
            ">

                Finalização

            </h1>





            <label>

                Email

            </label>


            <input


                type="email"


                placeholder="Digite seu email"


                value={email}


                onChange={(e)=>setEmail(e.target.value)}


                className="
                border
                p-2
                w-full
                rounded
                mb-3
                "

            />





            {

                !emailValido && email.length > 0 && (


                    <p className="text-red-500">

                        Email inválido

                    </p>


                )


            }






            <label>

                Senha

            </label>



            <input


                type="password"


                placeholder="Digite sua senha"


                value={senha}


                onChange={(e)=>setSenha(e.target.value)}


                className="
                border
                p-2
                w-full
                rounded
                mb-3
                "

            />





            {

                !senhaValida && senha.length > 0 && (


                    <p className="text-red-500">

                        Senha precisa ter no mínimo 6 caracteres

                    </p>


                )


            }







            {

                !formularioValido && (


                    <p className="text-red-500 mb-3">

                        Dados inválidos

                    </p>


                )


            }








            <button


                disabled={!formularioValido}


                onClick={finalizarCompra}


                className="

                bg-green-600

                text-white

                px-5

                py-2

                rounded

                w-full

                disabled:bg-gray-400

                active:scale-95

                transition

                "


            >


                Enviar pedido



            </button>







            {

                mensagem && (


                    <p className="text-green-600 font-bold mt-5">


                        {mensagem}


                    </p>


                )


            }




        </main>


    )


}