import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { Detail } from './pages/Detail';

export const App = () => {
  const isUserLogged = false;
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route
          path="/favs"
          element={isUserLogged ? <Favs /> : <NotRegisteredUser />}
        />
        <Route
          path="/user"
          element={isUserLogged ? <User /> : <NotRegisteredUser />}
        />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
};
