import { Link } from "react-router-dom";
import "./globals.css";

export default function App () {
    return(
        <div>
            <ol type='1'>
                <li>
                    <Link to="/Home">Atividade 1: Criar componente de página Home</Link>
                </li>
            </ol> 
        </div>
    )
}