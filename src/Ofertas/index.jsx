import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import ListaProdutos from "../components/ListarProdutos/ListarProdutos";

export default function Ofertas () {
    const [listaProdutos, setProdutos] = useState([
        {
            id: 4,
    
            nome: "Sova",

            classe: "Iniciador",
    
            origem: "Rússia",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/08b3d8822544bd327ebed0768c8b90fcec83d1a5-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Flecha de Ataque, Flecha Rastreadora, Drone Coruja, Fúria do Caçador"] ,

            preço: "R$ 29,90"
        },
        {
            id: 9,
    
            nome: "Breach",

            classe: "Iniciador",
    
            origem: "Suécia",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e435c3378b7999a3338b408dbb5da8ba63f91150-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Estopim, Falha Tectônica, Pós-Choque, Onda Trovejante"] ,

            preço: "R$ 29,90"
        },
        {
            id: 15,
    
            nome: "Astra",

            classe: "Controlador",
    
            origem: "Gana",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ba51d43803082941b0274b66413b0acc972546dd-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Pulso Nova, Nebulosa, Poço Gravitacional, Forma Astral/Divisa Cósmica"] ,

            preço: "R$ 29,90"
        },
        {
            id: 16,
    
            nome: "Kay/o",

            classe: "Iniciador",
    
            origem: "Terra - Futuro",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fe52e0efac73ec782b19a54e98a4658b03677407-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Granada/Clarão, Ponto/Zero, Frag/mento, Anular/CMD"] ,

            preço: "R$ 29,90"
        },
        {
            id: 17,
    
            nome: "Chamber",

            classe: "Sentinela",
    
            origem: "França",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0f5b668b77499c0051201389d6ac5e7343c9727f-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Caçador de Cabeças, Rendezvous, Marca Registrada, Tour de Force"] ,

            preço: "R$ 29,90"
        },
        {
            id: 20,
    
            nome: "Harbor",

            classe: "Controlador",
    
            origem: "India",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1246b5c517f6c8fa660e884a7032c1c54994003e-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Enseada, Maré Alta, Cascata, Retaliação"] ,

            preço: "R$ 29,90"
        },
        {
            id: 22,
    
            nome: "Deadlock",

            classe: "Sentinela",
    
            origem: "Noruega",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/477284dfe402a85abcf6b07512bcd6f01c8fe60e-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Sensor Sônico, Barreira de Contenção, Gravnet, Aniquilação"] ,

            preço: "R$ 29,90"
        },
        {
            id: 23,
    
            nome: "Iso",

            classe: "Duelista",
    
            origem: "China",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2c35cef9c38283f8478d1e808b1c129f371e50b3-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Sentelha Debiliante, Fluxo Protetor, Contingência, Contrato de Abate"] ,

            preço: "R$ 29,90"
        },
        {
            id: 24,
    
            nome: "Clove",

            classe: "Controlador",
    
            origem: "Escócia",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9f02060077f9d61dbe89555a339e6231006d9b7b-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Desvitalização, Artimanha, Revitalizar, Ainda Não Morri"] ,

            preço: "R$ 29,90"
        },
        {
            id: 26,
    
            nome: "Vyse",

            classe: "Sentinela",
    
            origem: "Escócia",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/370e4b820670ef0bac7e685f6e8c5e64d19f1890-587x900.png?auto=format&fit=fill&q=80&w=408",
    
            habilidades: ["Cerca-Viva, Rosa Arcana, Espinheiro Cortante, Jardim de Aço"] ,

            preço: "R$ 29,90"
        },
    ])
    
    return(
        <>
            <Header/>
            <ListaProdutos Produtos={listaProdutos}/>
           <Footer/>
        </>
    )
}