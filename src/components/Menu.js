import Link from 'next/link'

export default function Menu(){
  // background: cyan
  return(
    <nav className='bg-emerald-500 text-white  text-lg italic' >
      <h1 className='text-center p-4 bg-emerald-400 text-white'> Kelvin Store </h1>
      <ul className='flex gap-11 justify-center p-4'>
        <li className='border border-sky-900 p-2 hover:bg-sky-900 transition-all rounded-lg' > <Link href="/">Início</Link> </li>
        <li className='border border-sky-900 p-2 hover:bg-sky-900 transition-all rounded-lg' > <Link href="/Carrinho">Carrinho</Link> </li>
        <li className='border border-sky-900 p-2 hover:bg-sky-900 transition-all rounded-lg' > <Link href="/Cadastro">Cadastro</Link> </li>
        <li className='border border-sky-900 p-2 hover:bg-sky-900 transition-all rounded-lg' > <Link href="/Login">Login</Link> </li>  
      </ul>
    </nav>
  )
}