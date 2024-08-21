import { Link } from "react-router-dom";
import "./globals.css";

export default function App () {
    return(
        <div>
            <ol type='1'>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/ofertas">Ofertas</Link>
                </li>
                <li>
                    <Link to="/produtos">Produtos</Link>
                </li>
            </ol>
        </div>
    )
}