import { Link } from "react-router-dom";

export default function Header () {
    return(
        <header>
            <Link to="/"><h2 className="links">Inicial</h2></Link>
            <Link to="/home"><h2 className="links">Home</h2></Link>
            <Link to="/ofertas"> <h2 className="links">Ofertas</h2></Link>
            <Link to="/produtos"> <h2 className="links">Produtos</h2></Link>
        </header>
    )
}