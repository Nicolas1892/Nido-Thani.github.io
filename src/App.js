import './App.scss';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

function App() {
  return (
    <> 
    <Header></Header>
    <main>
      <section className="servicios">
        <div className="servicios__item">
          <img src='https://via.placeholder.com/350x250'></img>
          <h1>Servicio 1</h1>
        </div>
        <div className="servicios__item">
          <img src='https://via.placeholder.com/350x250'></img>
          <h1>Servicio 2</h1>
        </div>
        <div className="servicios__item">
          <img src='https://via.placeholder.com/350x250'></img>
          <h1>Servicio 3</h1>
        </div>
        <div className="servicios__item">
          <img src='https://via.placeholder.com/350x250'></img>
          <h1>Servicio 4</h1>
        </div>
      </section>
      <section className="noticias">

        <div className='noticias__item'>
          <h1>Noticia 1</h1>
        </div>
        <div className='noticias__item'>
          <h1>Noticia 2</h1>
        </div>

        <div className='noticias__item'>
          <h1>Evento 1</h1>
        </div>

        <div className='noticias__item'>
          <h1>Evento 2</h1>
        </div>

      </section>
    </main>
    <Footer></Footer>
    </>

    
  );
}

export default App;
