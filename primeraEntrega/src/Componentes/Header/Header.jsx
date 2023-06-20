import './Header.scss'
import { CardWidget } from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'



const Header = () => {

    return(
        <header className="header">
        <nav className="header_nav">
            <div >
                <img className='logo'  src="../public/img/Warhammer-logo.jpg"/>
                
            </div>
                
                    <Link className="header_link" to="#">Enlace1</Link>
                    <Link className="header_link" to="#">Enlace2</Link>
                    <Link className="header_link" to="#">Enlace3</Link>
                    <Link className="header_link" to="#">
                        <CardWidget />
                    </Link>
            </nav>
        </header>
    )
}

export default Header