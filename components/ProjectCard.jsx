import Github from "./logos/Github";
import Image from "next/image";
import Globe from "./logos/Globe";
import "@styles/components/project.scss";
const ProjectCard = (props) => {
  const tags = props.tags.toString().split(",");

  return (
    <div className="project-card">
      <div className="project-card__image">
        <Image
          src={props.image}
          alt="project image"
          width={200}
          height={200}
          className="img"
        />
      </div>
      <div className="project-card__content">
        <div className="content-wrapper">
          <h3 className="project-card__title">{props.title}</h3>
          {/* map over tags to create span for each tag element */}
          <div className="project-card__tags">
            {tags.map((tag) => (
              <span className="project-card__tag">{tag}</span>
            ))}
          </div>
          <p className="project-card__desc">{props.desc}</p>
          <div className="project-card__links">
            {/* link to ghLink if its not null */}
            {props.ghLink && (
              <a className="project-card__gh" href={props.ghLink}>
                <Github className="project-card__logo__gh" />
                Github
              </a>
            )}
            {props.demoLink && (
              <a className="project-card__live" href={props.demoLink}>
                <Globe className="project-card__logo__globe" />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
