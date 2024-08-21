import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from "react";


export default function Home () {
    const [produtosHome, setProdutoshome] = useState([
        {

            id: 1,

            item: "Hambúrguer",

            imagem: "https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg",

            preco: "R$ 25,99"

        },
    ])


    return(
       
        <div className="principalHome">
            <Header/>

            <div className="Home-Carrossel">
                <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showStatus={false} showThumbs={false} dynamicHeight>
                    <div>
                        <img src="src/imgs/pernadrag1.png" alt="Slide 3" /> 
                        <img src="src/imgs/pernadrag2.png" alt="Slide 3" />
                        
                    </div>
                </Carousel>
            </div>

            <div className="Home-Produtos">
                {
                    produtosHome.map((produto)=> 
                        <div key={produto.id}>
                                <img src={produto.imagem}/>
                                <p> { produto.item} </p>
                                <p> {produto.preco}</p>
                        </div>
                    )
                }
            </div>

            <Footer/>
            
        </div>
    )
}   