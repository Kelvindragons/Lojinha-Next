import Link from 'next/link'

export default function Menu(){
  return(
    <nav>
      <ul>
        <li> <Link href="/">Iníco</Link> </li>
        <li> <Link href="/Carrinho">Carrinho</Link> </li>
        <li> <Link href="/Cadastro">Cadastro</Link> </li>
        <li> <Link href="/Login">Login</Link> </li>
      </ul>
    </nav>
  )
}