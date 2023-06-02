import './Header.scss'



const Header = () => {

    return(
        <header className="header">
        <nav className="header_nav">
            <div >
                <img className='logo'  src="../public/img/Warhammer-logo.jpg"/>
                <h1 className='header_h1'>Warhammer 40k</h1>
            </div>
                
                    <a className="header_link" href="#">Enlace1</a>
                    <a className="header_link" href="#">Enlace2</a>
                    <a className="header_link" href="#">Enlace3</a>
            </nav>
        </header>
    )
}

export default Header