import React, { Component } from "react";
import { ProyectItems } from "./ProyectItems";
import "./styles/Proyects.css";

class Proyects extends Component {
    state = {
        dataProyects: [
            {
                image: "https://i.ibb.co/PmnYvKM/work1-2.jpg",
                name: "Panadería Ideal Punto de Venta",
                tecs: ["https://cdn-icons-png.flaticon.com/512/6132/6132221.png", "https://cdn-icons-png.flaticon.com/512/2772/2772128.png"],
                features: ["Registro de empleado con cuentas", "Registro de ventas de empleados y repartidor", "Registro de productos con código de barra", "Resumen de ventas por día/mes/año"],
                images: ["https://i.ibb.co/PQX5S0N/work1.jpg", "https://i.ibb.co/W3kv5Fb/work1-1.jpg", "https://i.ibb.co/PmnYvKM/work1-2.jpg", "https://i.ibb.co/NTT3YHb/work1-3.jpg", "https://i.ibb.co/yRhM0jN/work1-4.jpg", "https://i.ibb.co/q5Hz7Xn/work1-5.jpg", "https://i.ibb.co/1YVmRLb/work1-6.jpg"],
                github: "https://github.com/Jairox789",
                web: "https://jairortega.com/#/portafolio"
            },

            {
                image: "https://i.ibb.co/BVpHWHb/Web-portfolio.jpg",
                name: "Portafolio web",
                tecs: ["https://cdn-icons-png.flaticon.com/512/5968/5968267.png", "https://cdn-icons-png.flaticon.com/512/5968/5968242.png", "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png"],
                features: ["Interfaz responsiva", "Librería/Framework React"],
                images: ["https://i.ibb.co/BVpHWHb/Web-portfolio.jpg"],
                github: "https://github.com/Jairox789/Jairox789",
                web: "https://jairortega.com/"
            }
        ]

    };
    render() {
        return (
            <React.Fragment>
                <div className="ProjectList">
                    <h1>Proyectos</h1>
                    <div className="projects">
                        {this.state.dataProyects.map(dataProyect => (
                            <ProyectItems
                                image={dataProyect.image}
                                name={dataProyect.name}
                                tecs={dataProyect.tecs}
                                features={dataProyect.features}
                                images={dataProyect.images}
                                github={dataProyect.github}
                                web={dataProyect.web}
                            />
                        ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export { Proyects };