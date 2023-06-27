import Link from "next/link"

export default function Cadastro(){
    return(
        <div>
            <h1>Página Cadastro</h1>
            <p>Não tem um login ainda? <Link href="/Login">Clique Aqui</Link>.</p>
            <form>
                <input placeholder="Digite seu Nome"/>
                <input placeholder="Digite seu Email"/>
                <input placeholder="Digite seu Senha"/>
                <button>Salvar</button>
            </form>
        </div>
    )
}