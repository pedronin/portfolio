import React from 'react';
import ProjectBlock from '../components/ProjectBlock';

const projContent = [
  {
    title: 'Проекты на чистом js',
    descr: 'В ходе изучения языка, я делал мини проекты, закрепляя материал на практике.',
    url: '/js'
  },
  {
    title: 'Проекты React.js',
    descr: 'В ходе изучения языка, я делал мини проекты, закрепляя материал на практике.',
    url: '/react'
  },
  {
    title: 'Верстка',
    descr: 'В ходе изучения языка, я делал мини проекты, закрепляя материал на практике.',
    url: '/markup'
  },
];

const Home: React.FC = () => {
  return (
    <>
      {projContent.map((proj, i) => (
        <ProjectBlock title={proj.title} descr={proj.descr} url={proj.url} key={i} />
      ))}
    </>
  );
};

export default Home;
