import React from 'react';
import PasswordGenerate from '../components/projectsJs/PasswordGenerate';
import Сalculator from '../components/projectsJs/Сalculator';
import Todo from '../components/projectsJs/Todo';
import Slider from '../components/projectsJs/Slider';
import BarleyBreak from '../components/projectsJs/BarleyBreak';
import SnakeI from '../components/projectsJs/SnakeI';
import Snake from '../components/projectsJs/Snake';
// import { SnakeProvider } from '../components/projectsJs/Snakes/SnakeContext';

const ProjectJs = () => {
  React.useEffect(() => {
    function handler(e: KeyboardEvent) {
      e.preventDefault();
    }
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      {/* <SnakeProvider> */}
      <Snake />
      {/* </SnakeProvider> */}
      <PasswordGenerate />
      <Сalculator />
      <Todo />
      <Slider />
      <BarleyBreak />
    </>
  );
};

export default ProjectJs;
