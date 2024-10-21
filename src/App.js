import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './page/SignupPage';
import VerifiedSignup from './page/VerifiedSignup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/verified" element={<VerifiedSignup />} />
      </Routes>
    </Router>
  );
};

export default App;
