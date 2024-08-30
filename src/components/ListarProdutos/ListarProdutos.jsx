import { useState } from "react";

export default function ListaProdutos({Produtos}){

    const [listaPedidos, setlistaPedidos] = useState ([]);
    const adicionarProdutoPedido = (itens) =>{
        setlistaPedidos([...listaPedidos,itens]);
    }
  
    return(
        <>
            <div class="container-produtos"> 
    
                {
                    Produtos.map((itens) =>
                        <div class="produtos" key= {itens.id}>
                            <img src = {itens.imagem} id="produtos-img"/>
                            <h2>{itens.nome}</h2>
                            <h2>{itens.origem}</h2>
                            <h2>{itens.classe}</h2>
                            <h2>{itens.habilidades}</h2>
                            <h2>{itens.preço}</h2>
                            <button className="botao" onClick={() =>adicionarProdutoPedido(itens)}>Comprar</button>
                        </div>
                
                    )
                }   

            </div>
      </>
    )

}