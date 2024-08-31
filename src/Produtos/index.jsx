import { useState } from "react";
import Footer from "../components/Footer/Footer";
import ListaProdutos from "../components/ListarProdutos/ListarProdutos";
import Header from "../components/Header/Header";

export default function Produtos () {
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
            id: 5,
    
            nome: "Viper",

            classe: "Controlador",
    
            origem: "Estados Unidos",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/152244f121e61ca32bdd2bea9fc5370e315664fb-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Veneno de Cobra, Nuvem Venenosa, Cortina Tóxica, Poço Peçonhento "] ,

            preço: "R$ 39,90"
        },
        {
            id: 6,
    
            nome: "Cypher",

            classe: "Sentinela",
    
            origem: "Marrocos",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4a648cdbcbbeef137050deefeaf6a1369c606666-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Fio-Armadilha, Jaula Cibernética, Câmera de Vigilância, Assalto Neural"] ,

            preço: "R$ 39,90"
        },
        {
            id: 7,
    
            nome: "Reyna",

            classe: "Duelista",
    
            origem: " México",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7cb513c9b3eae3286449776e85753138436d553c-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Olhar Voraz, Devorar, Dispensar, Imperatriz das Almas"] ,

            preço: "R$ 39,90"
        },
        {
            id: 8,
    
            nome: "Killjoy",

            classe: "Sentinela",
    
            origem: "Alemanha",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/820d36d431fff77b1e1ece39ad6f007746bd31f6-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Nanoenxame, Robo de Alarme, Torreta, Confinamento"] ,

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
            id: 11,
    
            nome: "Jett",

            classe: "Duelista",
    
            origem: "Coreia do Sul",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Erupção das Brumas, Corrente de Ar, Brisa de Impulso, Tormenta de Aço"] ,

            preço: "R$ 39,90"
        },
        {
            id: 12,
    
            nome: "Raze",

            classe: "Duelista",
    
            origem: "Brasil",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/40b4b242b68afe30d21e7f95bdcacaebca46ea60-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Carga de Explosivos, Cartuchos de Tinta, Bumba, Estraga-Prazeres"] ,

            preço: "R$ 39,90"
        },
        {
            id: 13,
    
            nome: "Skye",

            classe: "Iniciador",
    
            origem: "Austrália",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/37ea1466beebb54aad4f16efbad184566cb80368-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Reflorescer, Predador, Luz Desbravadora, Rastreadores"] ,

            preço: "R$ 39,90"
        },
        {
            id: 14,
    
            nome: "Yoru",

            classe: "Duelista",
    
            origem: "Japão",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/05e1a996814dd10d7179efee327d29a7be00e912-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Ponto Cego, Passagem Dimensioal, Falcatrua, Espionagem Dimensioal"] ,

            preço: "R$ 39,90"
        },
        {
            id: 18,
    
            nome: "Neon",

            classe: "Duelista",
    
            origem: "Filipinas",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/14145d7bf9be17afa80c04ee4fbe200076cc1769-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Ricochete Elétrico, Equipamento Voltaico, Via Expressa, Sobrecarga"] ,

            preço: "R$ 39,90"
        },
        {
            id: 19,
    
            nome: "Fade",

            classe: "Iniciador",
    
            origem: "Turquia",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e7099cc13a665ed2b556d514e50984393ed49967-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Clausura, Assombrar, Espreitador das Sombras, Véu da Noite"] ,

            preço: "R$ 39,90"
        },
        {
            id: 21,
    
            nome: "Gekko",

            classe: "Iniciador",
    
            origem: "Estados Unidos",
    
            imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8d88f133f735f6a9077679b1ece754e5624c728e-616x822.png?auto=format&fit=fill&q=80&w=352",
    
            habilidades: ["Wingman, Dizzy, Mosh Pit, Thrash"] ,

            preço: "R$ 39,90"
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