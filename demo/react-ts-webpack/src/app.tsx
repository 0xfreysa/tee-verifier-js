import React, { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';

import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { VerifyTee } from './components/verify-tee';
import { VerifyNFT } from './components/verify-nft';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);

function App(): ReactElement {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<VerifyNFT />} />
          <Route path="/verify-tee" element={<VerifyTee />} />
          <Route path="/verify-nft" element={<VerifyNFT />} />
        </Routes>
      </div>
    </Router>
  );
}
