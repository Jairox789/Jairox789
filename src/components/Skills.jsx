import React, { Component } from "react";
import { SkillsItem } from "./SkillItem";
import "./styles/Skills.css";

class Skills extends Component {
  state = {
    dataSkills: [
      {
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
        nameSkill: "HTML",
        description: [
          "HTML semántico",
          "Uso de formularios HTML y validación de formularios con JavaScript",
          "Integración de servicios de terceros mediante la inclusión de código HTML",
        ],
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        nameSkill: "JavaScript",
        description: [
          "Manipulación del DOM (Document Object Model)",
          "Eventos en JavaScript",
          "Consumo de APIs (REST)",
          "Programación asíncrona (Callbacks, promesas, fetch, async/await)",
        ],
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
        nameSkill: "CSS",
        description: [
          "CSS layout y diseño responsive (grid, flexbox, media queries, etc.)",
          "Estilos personalizados para formularios HTML",
          "Uso de tipografía en CSS (fuentes personalizadas, tamaños de fuente, espaciado de letras y líneas, etc.)",
          "Animaciones y efectos visuales en CSS (transiciones, transformaciones, animaciones, etc.)",
        ],
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
        nameSkill: "PHP",
        description: [
          "Uso de librerías para manejar funciones específicas (imágenes, archivos y documentos)",
          "Desarrollo de API RESTful mediante PHP con framework Flight",
        ],
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/875/875209.png",
        nameSkill: "React",
        description: [
          "Desarrollo de aplicaciones web con React utilizando componentes",
          "Manejo del estado de la aplicación con React (state, props, etc.)",
          "Uso de herramientas y librerías para el manejo de rutas en aplicaciones React (React Router, etc.)",
        ],
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
        nameSkill: "C#",
        description: [
          "Desarrollo de aplicaciones de escritorio con C# utilizando Windows Forms",
        ],
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
        nameSkill: "Microsoft SQL Server",
        description: [
          "Diseño de bases de datos relacionales con Microsoft SQL Server",
          "Creación y gestión de vistas para simplificar el acceso a los datos en Microsoft SQL Server",
          "Implementación de seguridad en Microsoft SQL Server (usuarios, roles, permisos, etc.)",
        ],
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/3488/3488435.png",
        nameSkill: "Git y GitHub",
        description: [
          "Creación de repositorios en GitHub y manejo de la interfaz de usuario",
          "Uso de herramientas de análisis de código y revisiones automáticas de calidad en GitHub para mejorar la calidad del código",
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="title-skills">Herramientas de desarrollo</h1>
        <div className="skills-container">
          {this.state.dataSkills.map((dataSkill) => (
            <SkillsItem
              name={dataSkill.nameSkill}
              description={dataSkill.description}
              image={dataSkill.image}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export { Skills };
