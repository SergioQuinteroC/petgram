import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
// import { Favs } from './pages/Favs';
const Favs = React.lazy(() => import('./pages/Favs'));
import { User } from './pages/User';
import { Detail } from './pages/Detail';
import { NotFound } from './pages/NotFound';
import { ProtectedRoute } from './containers/ProtectedRoute';

export const App = () => {
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route
            path="/favs"
            element={
              <ProtectedRoute>
                <Favs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  );
};
