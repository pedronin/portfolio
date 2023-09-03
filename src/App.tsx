import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectJs from './pages/ProjectJs';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/js" element={<ProjectJs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
