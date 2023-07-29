import React from 'react';

import { Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home';
import ProjectJs from './pages/ProjectJs';
import ProjectReact from './pages/ProjectReact';
import ProjectMarkup from './pages/ProjectMarkup';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="js" element={<ProjectJs />} />
        <Route path="react" element={<ProjectReact />} />
        <Route path="markup" element={<ProjectMarkup />} />
      </Route>
    </Routes>
  );
};

export default App;
