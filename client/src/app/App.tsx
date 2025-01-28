import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage';
import FavoritesPage from '@/pages/FavoritesPage/FavoritesPage';
import MoviePage from '@/pages/MoviePage/MoviePage';
import Layout from '@/pages/Layout/Layout';

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
