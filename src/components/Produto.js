export default function Produto( props ){
    return(
        <div className="border p-4 shadow-xl rounded-lg" key={props.P.id}>
            <p className="text-lg italic font-bold">{props.P.nome}</p>
            {
                props.descricao == true ? <p> {props.P.descricao } </p> : ""
            }
            <p className="font-bold">{props.P.preco}</p>
            <img src={props.P.imagem} width={props.largura} />
            
        </div> 
    )
}