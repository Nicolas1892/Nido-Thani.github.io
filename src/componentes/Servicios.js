import '../styles/servicios.scss';
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import { getFeriadosData } from "../helpers/axios";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import "react-datepicker/dist/react-datepicker.css";
import Profesionales from "../helpers/profesionales.json"

const confirmacionSwal = withReactContent(Swal)

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
    let feriadosChile = [];

function Servicios() {
    let selectedProfesional = 0;
    let selectedProfesionalImg = '';

    let [feriados, setFeriados] = useState([]);
    const [loading, setLoading] = useState(true);

    const axiosFeriados = async () => {
        console.log('axiosFeriados');
        setLoading(true);
        feriados = await getFeriadosData();
        setFeriados(feriados);

        feriados.map((e)=>{
            let fecha = new Date(e.date);
            let fecha_utc = new Date(fecha.getTime() + fecha.getTimezoneOffset() * 60000);
            
            feriadosChile.push(fecha_utc)
            console.log(fecha_utc);
        })

        console.log(feriados);
        setLoading(false);
    };

    const [startDate, setStartDate] = useState(new Date());

    const onChange = (date) => {
        setStartDate(date);
        console.log(startDate);
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        console.log(Profesionales);
        setIsOpen(true);
        axiosFeriados();
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function agendarHora(evento) {
        evento.preventDefault();
        console.log('botón agendar hora');
        confirmacionSwal.fire({
            title: 'Hora agendá',
            icon: 'success',
            imageUrl: 'imagenes/confirmacion.jpeg',
            allowOutsideClick: false,
        }).then((e) => {
            closeModal();
        })
    }

    function elegirProfesional(e) {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('value');

        selectedProfesional = option;

        Profesionales.map((profesional) => {

            if (profesional.id == selectedProfesional) {
                selectedProfesionalImg = profesional.image;
            };

            console.log(selectedProfesionalImg);

        })

        console.log('elegir profesional');
    }

    Modal.setAppElement('#root');

    return (
        <>
            <section className="servicios">
                <div className="row">
                    <div className="column">
                        <div className="servicios__item" onClick={openModal}>
                            <img src='imagenes\nutricion.jpg'></img>
                            <h1>Servicio 1</h1>
                        </div>
                        <div className="servicios__item" onClick={openModal}>
                            <img src='imagenes\Fisioterapia.jpg'></img>
                            <h1>Servicio 2</h1>
                        </div>
                    </div>
                    <div className="column">
                        <div className="servicios__item" onClick={openModal}>
                            <img src='imagenes\psicologia.jpg'></img>
                            <h1>Servicio 3</h1>
                        </div>
                        <div className="servicios__item" onClick={openModal}>
                            <img src='imagenes\ayuda social.jpg'></img>
                            <h1>Servicio 4</h1>
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal">
                    <div className="row">
                        <h1>Reserva de horas
                            <button onClick={closeModal}>X</button>
                        </h1>
                    </div>
                    <div className="row">
                        <form className="agenda-hora" onSubmit={agendarHora}>

                            <div className="column">
                                <DatePicker
                                    selected={startDate}
                                    onChange={onChange}
                                    excludeDates={feriadosChile}
                                    startDate={startDate}
                                    inline
                                />
                            </div>

                            <div className="column">
                                <div className="select-container">
                                    <label htmlFor="profesional">Profesional</label>
                                    <select id="profesional" onChange={elegirProfesional}>
                                        {Profesionales.map(({ id, name }, index) => <option value={id} >{name}</option>)}
                                    </select>
                                    <img src={selectedProfesionalImg}></img>
                                </div>

                                <div className="select-container">
                                    <label htmlFor="hora">Elegir Hora</label>
                                    <select id="hora">
                                        <option>16:00 hrs</option>
                                        <option>17:00 hrs</option>
                                        <option>18:00 hrs</option>
                                        <option>19:00 hrs</option>
                                    </select>
                                </div>
                            </div>

                            <div className="column">
                                <button className="agendar" type="submit" onClick={agendarHora}>Agendar hora</button>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal>
        </>
    );
}

export default Servicios;
