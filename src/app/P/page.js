'use client'
import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function Produto(){

    useEffect(()=>{
        alert("Pagina Invalida")
        redirect("/")

    }, [])

    
}