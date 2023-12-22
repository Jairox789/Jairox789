import React, { Component } from "react";
import { ProyectItems } from "./ProyectItems";
import "./styles/Proyects.css";

class Proyects extends Component {
  state = {
    dataProyects: [
      {
        image: "https://i.ibb.co/PmnYvKM/work1-2.jpg",
        name: "Panadería Ideal Punto de Venta",
        tecs: [
          "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
          "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
        ],
        features: [
          "Registro de empleado con cuentas",
          "Registro de ventas de empleados y repartidor",
          "Registro de productos con código de barra",
          "Resumen de ventas por día/mes/año",
        ],
        images: [
          "https://i.ibb.co/PQX5S0N/work1.jpg",
          "https://i.ibb.co/W3kv5Fb/work1-1.jpg",
          "https://i.ibb.co/PmnYvKM/work1-2.jpg",
          "https://i.ibb.co/NTT3YHb/work1-3.jpg",
          "https://i.ibb.co/yRhM0jN/work1-4.jpg",
          "https://i.ibb.co/q5Hz7Xn/work1-5.jpg",
          "https://i.ibb.co/1YVmRLb/work1-6.jpg",
        ],
        github: "https://github.com/Jairox789",
        web: "https://jairortega.com/#/portafolio",
      },

      {
        image: "https://i.ibb.co/5THRdvW/demo1.png",
        name: "Ecoface (publicador autómatico)",
        tecs: [
          "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
          "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
          "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
          "https://cdn-icons-png.flaticon.com/512/919/919851.png",
          "https://cdn-icons-png.flaticon.com/512/919/919830.png",
          "https://cdn-icons-png.flaticon.com/512/919/919836.png",
        ],
        features: [
          "Uso de APIs de Meta (Facebook-Instagram)",
          "Librería/Framework React",
          "Framework/PHP Flight",
          "Añade una marca de agua de la empresa a cada imagen para publicarlas",
          "Realiza publicaciones programadas con mensajes del día",
        ],
        images: [
          "https://i.ibb.co/5THRdvW/demo1.png",
          "https://i.ibb.co/4MDbgr5/demo2.png",
          "https://i.ibb.co/7Q7tpL6/demo3.png",
          "https://i.ibb.co/JtHCS2t/demo4.png",
          "https://i.ibb.co/1RPN3KP/demo5.png",
          "https://i.ibb.co/R2VHKqW/demo6.png",
        ],
        github: "https://github.com/Jairox789/",
        web: "https://github.com/Jairox789/",
      },

      {
        image: "https://i.ibb.co/37gbZGd/mailer.png",
        name: "Valmaz App",
        tecs: [
          "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
          "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
          "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
          "https://cdn-icons-png.flaticon.com/512/919/919851.png",
          "https://cdn-icons-png.flaticon.com/512/919/919830.png",
          "https://cdn-icons-png.flaticon.com/512/919/919836.png",
        ],
        features: [
          "Librería/Framework React",
          "Framework/PHP Flight",
          "Envío de correos masivos",
          "Creador de campañas de Email Marketing",
          "Análisis de seguimiento y analitica de campañas enviadas",
          "Buscador de contactos de negocios con API de Google Maps",
          "Recolector de emails y contactos con técnicas de web scrapping",
        ],
        images: [
          "https://i.ibb.co/rMvvJqR/mailer1.png",
          "https://i.ibb.co/y86jVjv/mailer2.png",
          "https://i.ibb.co/sR7QfSq/mailer3.png",
          "https://i.ibb.co/85mSYqM/mailer4.png",
          "https://i.ibb.co/kDxtFyc/mailer5.png",
          "https://i.ibb.co/vDdY74m/mailer6.png",
          "https://i.ibb.co/GRFZPqP/mailer7.png",
          "https://i.ibb.co/LSCX3wF/mailer8.png",
        ],
        github: "https://github.com/Jairox789/",
        web: "https://jairortega.com/",
      },

      {
        image: "https://i.ibb.co/QQz0Swt/valmaz.png",
        name: "Valmaz sitio web",
        tecs: [
          "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
          "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
          "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
          "https://cdn-icons-png.flaticon.com/512/919/919851.png",
          "https://cdn-icons-png.flaticon.com/512/919/919830.png",
          "https://cdn-icons-png.flaticon.com/512/919/919836.png",
        ],
        features: [
          "Librería/Framework React",
          "Sitio responsivo",
          "React Router",
          "Usa API hecha con PHP Flight",
          "Sitio web administrable",
        ],
        images: [
          "https://i.ibb.co/QQz0Swt/valmaz.png",
          "https://i.ibb.co/GskLQNv/valmaz2.png",
          "https://i.ibb.co/mqc09rF/valmaz3.png",
          "https://i.ibb.co/KjJdr22/valmaz4.png",
        ],
        github: "https://github.com/Jairox789/",
        web: "http://valmaz.com/",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="ProjectList">
          <h1>Proyectos</h1>
          <div className="projects">
            {this.state.dataProyects.map((dataProyect) => (
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
