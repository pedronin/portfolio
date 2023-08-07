import React from 'react';
import { Link } from 'react-router-dom';

import githubIcon from '../assets/img/socialIcon/github_icon.svg';

interface IProjectBlock {
  title: string;
  descr: string;
  img?: any;
  url: string;
  gitHubUrl: string;
}

const ProjectBlock: React.FC<IProjectBlock> = ({ title, descr, img, url, gitHubUrl }) => {
  return (
    <div className="project">
      <h2 className="section-title">{title}</h2>
      <div className="project__content">
        <div className="project__content-img">
          <img src={img} alt="" />
        </div>
        <h3 className="project__content-descr">{descr}</h3>
        <div className="flex_wrap">
          {url.includes('https') ? (
            <a href={url} target="_blank">
              <button className="project__content-link btn">Посмотреть</button>
            </a>
          ) : (
            <Link to={url}>
              <button className="project__content-link btn">Посмотреть</button>
            </Link>
          )}
          <a href={gitHubUrl} target="_blank">
            <img src={githubIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
