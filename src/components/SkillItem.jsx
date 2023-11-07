import React from "react";
import "./styles/SkillItem.css";

const SkillsItem = (props) => {
  return (
    <div className="skill-item-container">
      <div className="content">
        <div className="skill-img">
          <img src={props.image} alt="skill" />
        </div>
        <p>
          <b>{props.name}</b>
        </p>
        {Array.isArray(props.description) &&
          props.description.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
      </div>
    </div>
  );
};

export { SkillsItem };
