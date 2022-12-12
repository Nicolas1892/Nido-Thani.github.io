// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

function Noticias() {
    return (
        <>
            <section className="noticias">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    direction="vertical"
                >
                    <SwiperSlide>
                        <div className='noticias__item'>
                        <img src='imagenes\noticia 1.jpg'></img>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='noticias__item'>
                            
                            <img src='imagenes\Noticia 2.jpg'></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='noticias__item'>
                            
                            <img src='imagenes\evento1.jpg'></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='noticias__item'>
                            
                            <img src='imagenes\Evento 2.jpg'></img>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>

        </>

    );
}

export default Noticias;
