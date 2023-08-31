import React from 'react';

import githubIcon from '../assets/img/socialIcon/github_icon.svg';

interface IButtonToGitHub {
  gitHubUrl: string;
}

const ButtonToGitHub: React.FC<IButtonToGitHub> = ({ gitHubUrl }) => {
  return (
    <a href={gitHubUrl} target="_blank">
      <img src={githubIcon} />
    </a>
  );
};

export default ButtonToGitHub;
