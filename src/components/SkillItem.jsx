import React from "react";
import "./styles/SkillItem.css";

const SkillsItem = props => {

  return (
    <div className="skill-item-container">
      <div className="content">
        <div className="skill-img">
          <img
            src={props.image}
            alt="skill"
          />
        </div>
        <p>{props.name}</p>
        <p>{props.nivel}</p>
      </div>
    </div>
  );
}

export { SkillsItem };
