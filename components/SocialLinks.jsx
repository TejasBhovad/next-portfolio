"use client";
// import css
import "@styles/components/links.scss";
// Logo Imports
import LinkedIn from "/components/logos/LinkedIn.jsx";
import Twitter from "/components/logos/Twitter.jsx";
import Codechef from "/components/logos/Codechef.jsx";
import Github from "/components/logos/Github.jsx";
const SocialLinks = () => {
  // object that stores links to social media,path to their logos alt text and name of media
  const socialMedia = [
    {
      link: "https://www.linkedin.com/in/tejas-bhovad/",
      logo: LinkedIn,
      alt: "LinkedIn",
      name: "LinkedIn",
      id: 0,
    },
    {
      link: "https://twitter.com/tejas_bhovad",
      logo: Twitter,
      alt: "Twitter",
      name: "Twitter",
      id: 1,
    },
    {
      link: "https://www.codechef.com/users/tejasbhovad",
      logo: Codechef,
      alt: "Codechef",
      name: "Codechef",
      id: 2,
    },
    {
      link: "https://github.com/TejasBhovad",
      logo: Github,
      alt: "Github",
      name: "Github",
      id: 3,
    },
  ];

  //map over all elements of social links and return a div with clickable SVGR components from components/logos that takes you to the link
  return (
    <div className="links-container">
      {socialMedia.map((media) => (
        <div className="social-link" key={media.id}>
          <a
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <media.logo className="social-link" alt={media.alt} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
