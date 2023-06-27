'use client'
import { buscaTodos } from "@/model/Produtos"
import { useState, useEffect } from "react"

export default function Home() {
  
  const [produtos, setProdutos] = useState([])

  // esse é o jeito certo, react avisa como fazer:
  // useEffect(()=>{
  // async function dados(){
  // const resposta = await buscaTodos(); 
  //}
  // }, [])
  useEffect(async()=>{ // jeito errado
    const resposta = await buscaTodos();   
    setProdutos(resposta.data)           
  }, [])
  
  return (
    <div>
      <h1>Everton Store</h1>
      <p>Confira nossos produtos:</p>
      {
        produtos == 0 ? <p>Carregando...</p> : 
        produtos.map(P => 
        <div key={P.id}>
          <p>{P.nome}</p>
          <p>{P.preco}</p>
          <img src={P.imagem}/>
        </div>  
        )
      }
    </div>
  )
}
