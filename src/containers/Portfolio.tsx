import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import {TechnologiesEnum} from '../models/TechnologiesEnum';

interface Project {
  id: string;
  technologies: string[];
  commercial: boolean;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: "crypto-news",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.ts,
        TechnologiesEnum.sass,
      ],
      commercial: false,
    },
    {
      id: "speednet-site-react-exercise",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.js,
        TechnologiesEnum.sass,
      ],
      commercial: false,
    },
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
    },
  ];
  return (
    <div className={`portfolio-container`}>
      <div className={`portfolio-wrapper`}>
        {projects.map((project: Project, index: number) => {
          return (
            <PortfolioItem key={`portfolio-item-${index}`}
              id={project.id}
              technologies={project.technologies}
              commercial={project.commercial}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
