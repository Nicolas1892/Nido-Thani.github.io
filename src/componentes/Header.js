import '../styles/header.scss';
function Header() {
  return (
    <header>
      <div className="logo">
        <img src="imagenes\Logo_Nido_Thani.png" alt='Logo'></img>
      </div>
      <div className="menu">
        <nav className='navbar'>
          <ul className='navbar__container'>
            <li className='navbar__item'>
              <a href="/">Nosotres</a>
            </li>

            <li className='navbar__item'>
              <a href="/">Beneficios</a>
            </li>

            <li className='navbar__item'>
              <a href="/">Contactos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
