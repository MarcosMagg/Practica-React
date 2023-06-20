import './Header.scss'
import { Link } from 'react-router-dom'
import { CardWidget } from '../CardWidget/CardWidget'


const Header = ({variant = false}) => {

    return (
        <header className={variant ? "header header-v" : "header"}>
            <div className="header__container">
            <img className="logo"  src="../public/img/Warhammer-logo.jpg"/>

                <nav className="header__nav">
                    <Link className="header__link" to="/">Inicio</Link>
                    <Link className="header__link" to="/productos/Space-Marines">Space-Marines</Link>
                    <Link className="header__link" to="/productos/Tyranids">Tyranids</Link>
                    <Link className="header__link" to="/productos/Necrons">Necrons</Link>
                    <Link className="header__link" to="/productos/Adeptus-Mechanicus">Adeptus-Mechanicus</Link>
                    <Link className="header_link" to="#">
                        <CardWidget />
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header