'use client'
import Produto from "@/components/Produto";
import { busca } from "@/model/Produtos";
import { useEffect, useState } from "react"

export default function  PID(props){

    const id = props.params.id

    const [ quantidade, alteraQuantidade ] = useState( 1 );
    const [ produto, alteraproduto ] = useState( null );

    function addCarrinho(){

        let carrinho = localStorage.getItem("carrinho");
        carrinho = JSON.parse( carrinho );


        let objeto = { id: id, quantidade: quantidade }

        carrinho.push( objeto );
        carrinho = JSON.stringify( carrinho )

        //objeto = JSON.stringify(objeto)

        localStorage.setItem("carrinho", carrinho )
        //localStorage.getItem
    }

    useEffect( ()=> {
         async function data(){
            const resposta = await  busca( id );

            if( resposta.status == 200 ){
                alteraproduto( resposta.data[0] )
            }
           
        }
        data();
    }, [] );

    return(
        <div>
            {
                produto == null ? <p> Produto não Encontrado... </p> :
                <div className="w-1/4 m-auto pt-4">
                    
                    <Produto P={produto} descricao={true} largura={350} />

                    <br/>
                    <label>
                        Quantidade:
                        <input type="number" onChange={(e)=>alteraQuantidade(e.target.value)} />
                    </label>

                    <button onClick={ ()=> addCarrinho() } > Adicionar ao Carrinho </button>
                         



                </div>
            }


            
        </div>
    )
}