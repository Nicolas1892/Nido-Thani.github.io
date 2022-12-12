import './App.scss';
import 'swiper/css';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

import Servicios from './componentes/Servicios';
import Noticias from './componentes/Noticias';

function App() {
  return (
    <> 
    <Header></Header>
    <main>
      <Servicios></Servicios>
      <Noticias></Noticias>
    </main>
    <Footer></Footer>
    </>

    
  );
}

export default App;
