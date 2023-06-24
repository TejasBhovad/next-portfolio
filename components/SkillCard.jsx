import React from "react";
import "@styles/components/skill.scss";

const SkillCard = (props) => {
  return (
    <div className="skill-card">
      <div className="wrapper">
        <div className="skill-card__top">
          <div className="skill-card__top_logo">
            <props.logo alt={props.name} className="skill-logo" />
          </div>
          <div className="skill-card__text">
            <div className="skill-card__name">{props.name}</div>
            <div className="skill-card__tag">{props.tag}</div>
          </div>
        </div>
        <div className="skill-card__description">{props.description}</div>
      </div>
    </div>
  );
};

export default SkillCard;
