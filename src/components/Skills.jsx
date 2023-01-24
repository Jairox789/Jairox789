import React, { Component } from "react";
import { SkillsItem } from "./SkillItem";
import "./styles/Skills.css";

class Skills extends Component {
  state = {
    dataSkills: [
      {
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
        nameSkill: "HTML",
        nivel: "Básico"
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        nameSkill: "JavaScript",
        nivel: "Básico"
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
        nameSkill: "CSS",
        nivel: "Básico"
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/875/875209.png",
        nameSkill: "React",
        nivel: "Básico"
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
        nameSkill: "C#",
        nivel: "Intermedio"
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
        nameSkill: "Microsoft SQL Server",
        nivel: "Básico"
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/3488/3488435.png",
        nameSkill: "Git y GitHub",
        nivel: "Básico"
      },
    ]
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="title-skills">Herramientas de desarrollo</h1>
        <div className="skills-container">
          {this.state.dataSkills.map(dataSkill => (
            <SkillsItem
              name={dataSkill.nameSkill}
              nivel={dataSkill.nivel}
              image={dataSkill.image}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export { Skills };
