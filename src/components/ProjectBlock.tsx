import React from 'react';
import { Link } from 'react-router-dom';

import githubIcon from '../assets/img/socialIcon/github_icon.svg';
import ButtonToGitHub from './ButtonToGitHub';

interface IProjectBlock {
  title: string;
  descr: string;
  img?: any;
  url: string;
  gitHubUrl: string;
  gitHubBackUrl?: string;
}

const ProjectBlock: React.FC<IProjectBlock> = ({
  title,
  descr,
  img,
  url,
  gitHubUrl,
  gitHubBackUrl,
}) => {
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
          <ButtonToGitHub gitHubUrl={gitHubUrl} />
          {gitHubBackUrl ? <ButtonToGitHub gitHubUrl={gitHubBackUrl} /> : ''}
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
