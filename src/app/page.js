'use client'
import { buscaTodos } from "@/model/Produtos"
import Link from "next/link"
import { useState, useEffect } from "react"
import Produto from "@/components/Produto"

export default function Home() {
  
  const [produtos, setProdutos] = useState([])

  useEffect(()=>{

    async function dados(){
 
    const resposta = await buscaTodos();
 
    setProdutos(resposta.data)
 
   }
 
   dados();
 
    }, [])
  
  return (
    <div className="grid grid-cols-2 place-items-center pt-4">
      
      
      {
        produtos == 0 ? <p>Carregando...</p> : 
        produtos.map(P => 
          <Link href={ "/P/"+ P.id }  >
            <Produto P={P} largura={250} />
         </Link>
        )
      }

    </div>
  )
}
