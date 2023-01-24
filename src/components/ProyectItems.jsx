import React, { useState } from "react";
import "./styles/ProyectItems.css";
import { Modal } from "../Modals/Modal";

const ProyectItems = props => {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    return (
        <React.Fragment>
            <div className="proyects-container">
                <div className="image-proyect">
                    <img src={props.image} alt="proyect" />
                </div>
                <div className="info-proyect">
                    <h3>{props.name}</h3>
                    <div className="tecs-img">
                        {props.tecs.map(tec => (
                            <img src={tec} alt="tecnologías" />
                        ))}
                    </div>
                    <div className="proyect-features">
                        <ul>
                            {props.features.map(feature => (
                                <li>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="show-proyect">
                    <button className="btn-modal"
                        onClick={() => cambiarEstadoModal1(!estadoModal1)}
                        data-hover="Más"
                    ><div>Ver proyecto</div></button>
                </div>
            </div>

            <Modal
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                Proyecto={props.name}
            >
                <div className="enlaces">
                    <li class="link">

                        <a href={props.web} class="link-work2">
                            <img src="https://cdn-icons-png.flaticon.com/512/7719/7719009.png" alt="Website" />
                        </a>

                        <a href={props.github} class="github-link-work2">
                            <img src="https://cdn-icons-png.flaticon.com/512/3488/3488435.png" alt="GitHub" />
                        </a>
                    </li>
                </div>
                <h3>Detalles</h3>
                <div className="Diplomas">
                    {props.images.map(image => (
                        <img src={image} alt="Proyecto" />
                    ))}
                </div>

            </Modal>

        </React.Fragment>
    );
}

export { ProyectItems };