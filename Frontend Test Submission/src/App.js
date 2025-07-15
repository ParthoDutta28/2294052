
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShortenUrlPage from './pages/ShortenUrlPage';
import StatsPage from './pages/StatsPage';
import RedirectPage from './pages/RedirectPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* URL Shortener Form Page */}
        <Route path="/" element={<ShortenUrlPage />} />

        {/* Statistics Page */}
        <Route path="/stats" element={<StatsPage />} />

        {}
        <Route path="/:shortcode" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
