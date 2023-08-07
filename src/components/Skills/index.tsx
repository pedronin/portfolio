import React from 'react'

import './Skills.scss'

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="section-title">Мои навыки</h2>
      <ul className="skills__list ">
        <li className="skills__item">HTML5</li>
        <li className="skills__item">CSS3, SCSS, tailwind</li>
        <li className="skills__item">JavaScript</li>
        <li className="skills__item">React</li>
        <li className="skills__item">Redux Toolkit, RTK query</li>
        <li className="skills__item">react-router-dom</li>
        <li className="skills__item">Rest API</li>
        <li className="skills__item">Gulp</li>
        <li className="skills__item">Figma</li>
      </ul>
    </div>
  )
}

export default Skills