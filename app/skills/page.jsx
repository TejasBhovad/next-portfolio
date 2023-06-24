import ExpCard from "@components/ExpCard";
import SkillCard from "@components/SkillCard.jsx";
import LinkedIn from "@components/logos/LinkedIn";
import ReactL from "@components/logos/ReactL";
import Java from "@components/logos/Java";
import Python from "@components/logos/Python";
import C from "@components/logos/C";
const SkillsPage = () => {
  //Array that stores skills
  const skills = [
    {
      name: "Java",
      tag: "DSA and CP",
      description:
        "Competitive programming and data structures. JavaFX and Gradle",
      logo: Java,
    },
    {
      name: "React",
      tag: "Web Dev",
      description: "Created many projects using React and NextJS",
      logo: ReactL,
    },
    {
      name: "Python",
      tag: "Data Science",
      description: "Used python for dataset cleaning and analysis",
      logo: Python,
    },
    {
      name: "C",
      tag: "Academics",
      description: "Studied C as a part of academics. ",
      logo: C,
    },
  ];
  // Array for experience
  const experience = [
    {
      title: "KLEOS Hackathon",
      desc: "Participated and finalized in KLEOS Hackathon",
      date: "2022",
    },
    {
      title: "Codechef Problems",
      desc: "Solved over 100 Data Structures and Algorithms problems on Codechef ",
      date: "2022-present",
    },
  ];
  return (
    <div className="main skills">
      <div className="wrapper-skills-page">
        <a className="heading">Languages</a>
        <div className="contain-skill">
          {/* map over skills array and create a skill card for each skill */}
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              tag={skill.tag}
              description={skill.description}
              logo={skill.logo}
            />
          ))}
        </div>
        <br />
        <br />
        <a className="heading">Experience</a>
        <div className="contain-exp">
          {/* map over experience array and create exp card */}
          {experience.map((exp, index) => (
            <ExpCard
              title={exp.title}
              desc={exp.desc}
              date={exp.date}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
