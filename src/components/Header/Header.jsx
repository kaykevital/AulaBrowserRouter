import { Link } from "react-router-dom";

export default function Header () {
    return(
        <div className="Header">
                <li>
                    <Link to="/">Inicial</Link>       
                </li> 
                <li>
                    <Link to="/home">Home</Link>       
                </li> 
                <li>
                    <Link to="/ofertas">Ofertas</Link> 
                </li> 
                    <li>
                    <Link to="/produtos">Produtos</Link>
                </li>
        </div>
    )
}