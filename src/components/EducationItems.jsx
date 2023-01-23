import React, { useState } from "react";
import "./styles/EducationItems.css";
import { Modal } from "../Modals/Modal";

const EducationItems = props => {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    return (
        <React.Fragment>
            <div className="cards-container">
                <div className="card">
                    <div className="front">
                        <div className="header-school">
                            <img className="school-image" src={props.image} alt="uat" />
                        </div>
                        <h3>{props.name}</h3>
                        <p>{props.fechas}</p>
                        <button className="button">Girar</button>
                    </div>
                    <div className="back">
                        <p>{props.info}</p>
                        <button className="btn-modal"
                            onClick={() => cambiarEstadoModal1(!estadoModal1)}
                            data-hover="Mostrar"
                        ><div>Diplomas</div></button>

                    </div>
                </div>
            </div>

            <Modal
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                Escuela={props.name}
                Images={props.images}
            >
                <div className="Diplomas">
                    {props.images.map(image => (
                        <img src={image} alt="diploma" />
                    ))}
                </div>


            </Modal>

        </React.Fragment>
    );
}

export { EducationItems };