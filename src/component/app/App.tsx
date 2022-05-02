import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from
  'react-router-dom';

import Menu from '../menu/Menu';
import HomePage from '../homePage/HomePage';
import DriftPage from '../driftPage/DriftPage';
import TimeAttackPage from '../timeAttackPage/TimeAttackPage';
import ForzaPage from '../forzaPage/ForzaPage';

export default function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
