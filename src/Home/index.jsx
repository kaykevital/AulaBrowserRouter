import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from "react";
import ListaProdutos from "../components/ListarProdutos/ListarProdutos";

export default function Home () {
    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
    
            nome: "Brimstone",

            classe: "Iniciador",
    
            origem: "Estados Unidos",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Sinalizador Estimulante, Incendiário, Fumaça Celeste, Ataque Orbital"] ,

            preço: "R$ 39,90"
        },
        {
            id: 2,
    
            nome: "Phoenix",

            classe: "Duelista",
    
            origem: "Reino Unido",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47387e354c34d51b84066bc47af3c5755b92b9c5-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Labareda, Bola Curva, Mãos Quentes, Renascimento"] ,

            preço: "R$ 39,90"
        },
        {
            id: 3,
    
            nome: "Sage",

            classe: "Sentinela",
    
            origem: "China",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/58a180961a14beb631877921e647c233804853c1-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Orbe de lentidão, Orbe Curativo, Orbe de Barreira, Ressureição"] ,

            preço: "R$ 39,90"
        },
        {
            id: 10,
    
            nome: "Omen",

            classe: "Controlador",
    
            origem: "Desconhecido",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/015a083717e9687de8a741cfceddb836775b5f9f-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Passos Tenebrosos, Paranoia, Manto Sombrio, Salto das Sombras"] ,

            preço: "R$ 39,90"
        },
        {
            id: 5,
    
            nome: "Viper",

            classe: "Controlador",
    
            origem: "Estados Unidos",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/152244f121e61ca32bdd2bea9fc5370e315664fb-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Veneno de Cobra, Nuvem Venenosa, Cortina Tóxica, Poço Peçonhento "] ,

            preço: "R$ 39,90"
        },
    ])

    return(
        <>
            <Header/>
            <div className="carrosel">
                <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showStatus={false} showThumbs={false} dynamicHeight>
                        <div className="imgCarrosel">
                            <img src="https://xgp.pl/wp-content/uploads/2022/11/valorant-1280x720.jpg.webp" alt="Slide 1"/>  
                        </div>
                        <div className="imgCarrosel">
                            <img src="https://wallpapercave.com/wp/wp8091639.jpg" alt="Slide 2"/>  
                        </div>
                        <div className="imgCarrosel">
                            <img src="https://cdn.mmoculture.com/mmo-images/2021/06/12-Valorant-agents.jpg" alt="Slide 3"/>  
                        </div>
                </Carousel>
            </div>
            <ListaProdutos Produtos={listaProdutos} className="produtohome"/>
            <Footer/>
        </>
    )
}   
