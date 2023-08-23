import React from 'react';
import ProjectBlock from '../components/ProjectBlock';

import shopImg from '../assets/img/shop_page.png';
import markupImg from '../assets/img/markup_page.png';
import Skills from '../components/Skills';

const projContent = [
  {
    title: 'Интернет магазин',
    descr:
      'Интернет магазин напиcанный на React + Redux Toolkit.',
    url: 'https://pedronin.github.io/DINIS/',
    img: shopImg,
    gitHubUrl: 'https://github.com/pedronin/DINIS'
  },
  {
    title: 'Мини работы',
    descr:
      'В ходе изучения програмирования, я делал множество интересных pet проектов, закрепляя материал на практике.',
    url: '/js',
    gitHubUrl: 'https://github.com/pedronin/portfolio'
  },
  {
    title: 'Сайт художника',
    descr: 'Верстка + небольшой функционал. Множество слайдеров и попапов. Недоработанно!',
    url: 'https://akkuratnovaart.ru/',
    img: markupImg,
    gitHubUrl: 'https://github.com/pedronin/AkkuratnovaArt'
  }
];

const Home: React.FC = () => {
  return (
    <>
      {projContent.map((proj, i) => (
        <ProjectBlock {...proj} key={i} />
      ))}

      <Skills />
    </>
  );
};

export default Home;
