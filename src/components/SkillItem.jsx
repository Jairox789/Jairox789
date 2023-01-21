import React from "react";
import "./styles/SkillItem.css";

function SkillsItem() {
  return (
    <div className="skill-item-container">
      <div className="skill-img">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
          alt="skill"
        />
      </div>
      <p>Tecnologia</p>
      <p>Nivel</p>
    </div>
  );
}

export { SkillsItem };
