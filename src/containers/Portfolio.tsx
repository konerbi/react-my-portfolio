import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import { TechnologiesEnum } from "../models/TechnologiesEnum";

interface Project {
  id: string;
  technologies: string[];
  commercial?: boolean;
  collaborateCompany?: string;
  referenceUrl?: string;
  sourceCodeUrl?: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: "pzu",
      technologies: [
        TechnologiesEnum.angular,
        TechnologiesEnum.ts,
        TechnologiesEnum.sass,
        TechnologiesEnum.html5,
        TechnologiesEnum.js,
        TechnologiesEnum.php,
        TechnologiesEnum.css,
      ],
      commercial: true,
      collaborateCompany: "Speednet Sp. z o.o.",
      referenceUrl: "https://speednet.pl/projekty/pzu-cash-en/",
    },
    {
      id: "saar",
      technologies: [
        TechnologiesEnum.angular,
        TechnologiesEnum.ts,
        TechnologiesEnum.sass,
        TechnologiesEnum.docker,
      ],
      commercial: true,
      collaborateCompany: "Speednet Sp. z o.o.",
      referenceUrl: "https://speednet.pl/en/projekty/saar-landesbank-en/",
    },
    {
      id: "bbs3d",
      technologies: [
        TechnologiesEnum.angular,
        TechnologiesEnum.ts,
        TechnologiesEnum.sass,
      ],
      commercial: true,
      collaborateCompany: "Speednet Sp. z o.o.",
      referenceUrl:
        "https://www.buildingblocksofscience.com/ion-bbs3d-at-home-learning-114JL-45147J.html",
    },
    {
      id: "crypto-news",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.ts,
        TechnologiesEnum.sass,
      ],
      sourceCodeUrl: "https://github.com/konerbi/react-crypto-news",
    },
    {
      id: "speednet-site-react-exercise",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.js,
        TechnologiesEnum.sass,
      ],
      sourceCodeUrl: "https://github.com/konerbi/react-speednet-site-project",
    },
  ];
  return (
    <div className={`portfolio-container`}>
      <div className={`portfolio-wrapper`}>
        {projects.map((project: Project, index: number) => {
          return (
            <PortfolioItem
              key={`portfolio-item-${index}`}
              id={project.id}
              technologies={project.technologies}
              commercial={project.commercial}
              collaborateCompany={project.collaborateCompany}
              referenceUrl={project.referenceUrl}
              sourceCodeUrl={project.sourceCodeUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
