'use client'
import { buscaTodos } from "@/model/Produtos"
import Link from "next/link"
import { useState, useEffect } from "react"

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
    <div>
      <h1>Kelvin Store</h1>
      <p>Confira nossos produtos:</p>
      {
        produtos == 0 ? <p>Carregando...</p> : 
        produtos.map(P => 
          <Link href={ "/P/"+ P.id }  >
        <div key={P.id}>
          <p>{P.nome}</p>
          <p>{P.preco}</p>
          <img src={P.imagem}/>
        </div> 
         </Link>
        )
      }
    </div>
  )
}
