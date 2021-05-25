import React from "react";
import LazyLoad from "react-lazyload";
import PortfolioItem from "../components/PortfolioItem";
import { TechnologiesEnum } from "../models/TechnologiesEnum";

interface Project {
  id: string;
  technologies: string[];
  commercial?: boolean;
  collaborateCompany?: string;
  collaborateCompanyUrl?: string;
  referenceUrl?: string;
  sourceCodeUrl?: string;
  images?: string[];
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
      collaborateCompanyUrl: "https://speednet.pl/",
      referenceUrl: "https://speednet.pl/projekty/pzu-cash-en/",
      images: ["pzu_lp_0.png", "pzu_lp_1.png", "pzu_lp_2.png", "pzu_lp_3.png"],
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
      collaborateCompanyUrl: "https://speednet.pl/",
      referenceUrl: "https://speednet.pl/en/projekty/saar-landesbank-en/",
      images: [
        "saar_0.png",
        "saar_1.png",
        "saar_2.png",
        "saar_3.png",
        "saar_4.png",
        "saar_5.png",
        "saar_6.png",
        "saar_7.png",
      ],
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
      collaborateCompanyUrl: "https://speednet.pl/",
      referenceUrl:
        "https://www.buildingblocksofscience.com/ion-bbs3d-at-home-learning-114JL-45147J.html",
      images: ["bbs3d_0.png", "bbs3d_1.png", "bbs3d_2.png"],
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
      id: "speednet-site",
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
            // <LazyLoad key={`portfolio-item-${index}`} offset={100}>
              <PortfolioItem key={`portfolio-item-${index}`}
                id={project.id}
                technologies={project.technologies}
                commercial={project.commercial}
                collaborateCompany={project.collaborateCompany}
                collaborateCompanyUrl={project.collaborateCompanyUrl}
                referenceUrl={project.referenceUrl}
                sourceCodeUrl={project.sourceCodeUrl}
                images={project.images}
              />
            // </LazyLoad>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
