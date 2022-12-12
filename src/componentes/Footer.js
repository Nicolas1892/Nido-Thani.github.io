function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src="imagenes\Logo_Nido_Thani.png" alt='Logo'></img>
      </div>
      <div className="redes">
        <h1>Redes Sociales</h1>
        <ul>
          <li>
            <a href="facebook.com">Facebook</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="instagram.com">Istagram</a>
          </li>
        </ul>
        
      </div>
      <div className="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58095.482976614076!2d-70.70233980154164!3d-33.45767516636727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0069af23abb%3A0x879d59f409ed4897!2sSantiago%2C%20Santiago%20Metropolitan%20Region!5e0!3m2!1sen!2scl!4v1670802028241!5m2!1sen!2scl" width={250} height={150} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="mapa"></iframe>
      </div>

    </footer>
  );
}

export default Footer;
