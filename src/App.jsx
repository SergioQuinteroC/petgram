import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);

  const detailId = urlParams.get('detail');
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:id" element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};
