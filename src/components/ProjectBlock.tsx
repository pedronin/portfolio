import React from 'react';
import { Link } from 'react-router-dom';

interface IProjectBlock {
  title: string;
  descr: string;
  img?: any;
  url: string;
}

const ProjectBlock: React.FC<IProjectBlock> = ({ title, descr, img, url }) => {
  return (
    <div className="project">
      <h2 className="section-title">{title}</h2>
      <div className="project__content">
        <div className="project__content-img"></div>
        <h3 className="project__content-descr">{descr}</h3>
        <Link to={url}>
          <button className="project__content-link btn">Посмотреть</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectBlock;
