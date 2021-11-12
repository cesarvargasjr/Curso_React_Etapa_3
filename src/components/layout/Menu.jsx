import React from "react"
import { Link } from "react-router-dom"
import './Menu.css'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/param/Teste 1">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/Teste 2">Param #02</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/naoExiste">Não Existe</Link> {/* Compomente não mapeado para mostrar que usando o "exact", esse item do menu quando clicado não mostrará conteúdo OU o Not Found 404. */}
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu