import './App.css';
function Header() {
  return (
    <header>
      <div className="logo">
        <img src="imagenes\Logo_Nido_Thani.png" alt='Logo'></img>
      </div>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <a href="#">  Nosotres     
              </a>
            </li>
            
            <li>
              <a href="#">  Beneficios     
              </a>
            </li>

            <li>
              <a href="#">  Contactos     
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
