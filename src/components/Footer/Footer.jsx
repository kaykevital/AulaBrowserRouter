import { FaInstagram, FaGithub } from "react-icons/fa";   
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return(
        <footer>
            <div className='footer-icone'>
                <li>
                    <a href="https://www.instagram.com/kayke.vital/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/kaykevital" target="_blank" rel="noopener noreferrer">
                        <FaGithub/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/KaykeKase" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter/>
                    </a>
                </li>
            </div>
            <p>© Todos os direitos reservados a Kayke Vital</p>
        </footer>
    )
}