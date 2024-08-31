import { useState } from "react";

export default function ListaProdutos({Produtos}){

    const [listaProdutos, setListaProdutos] = useState ([]);
    const adicionarProdutoPedido = (itens) =>{
        setListaProdutos([...listaProdutos,itens]);
    }
  
    return(
        <>
            <div class="container-produtos"> 
    
                {
                    Produtos.map((itens) =>
                        <div class="produtos" key= {itens.id}>
                            <img src = {itens.imagem} className="produtos-img"/>
                            <h2>{itens.nome}</h2>
                            <h2>Origem: {itens.origem}</h2>
                            <h2>Classe: {itens.classe}</h2>
                            <p>Habilidades</p>
                            <h2> {itens.habilidades}</h2>
                            <h2>Preço: {itens.preço}</h2>
                            <button className="botao" onClick={() =>adicionarProdutoPedido(itens)}>Comprar</button>
                        </div>
                
                    )
                }   

            </div>
      </>
    )

}