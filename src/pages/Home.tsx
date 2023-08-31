import React from 'react';

import shopImg from '../assets/img/shop_page.png';
import markupImg from '../assets/img/markup_page.png';
import blogImg from '../assets/img/blog.png';

import ProjectBlock from '../components/ProjectBlock';
import Skills from '../components/Skills';

const projContent = [
  {
    title: 'Blog',
    descr: 'Фулл стэк приложение React TS + RTK query + Node.js',
    url: 'https://pedronin.github.io/blog-react.js/',
    img: blogImg,
    gitHubUrl: 'https://github.com/pedronin/blog-react.js',
    gitHubBackUrl: 'https://github.com/pedronin/blog-node.js',
  },
  {
    title: 'Интернет магазин',
    descr: 'напиcан на React TS + Redux Toolkit.',
    url: 'https://pedronin.github.io/DINIS/',
    img: shopImg,
    gitHubUrl: 'https://github.com/pedronin/DINIS',
  },
  {
    title: 'Мини работы',
    descr:
      'В ходе изучения програмирования, я делал множество интересных pet проектов, закрепляя материал на практике.',
    url: '/js',
    gitHubUrl: 'https://github.com/pedronin/portfolio',
  },
  {
    title: 'Сайт художника',
    descr: 'Верстка + небольшой функционал. Множество слайдеров и попапов. Недоработанно!',
    url: 'https://akkuratnovaart.ru/',
    img: markupImg,
    gitHubUrl: 'https://github.com/pedronin/AkkuratnovaArt',
  },
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
