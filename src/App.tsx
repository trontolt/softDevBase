import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';

const Application: React.FunctionComponent = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </HashRouter>
);

export default Application;
