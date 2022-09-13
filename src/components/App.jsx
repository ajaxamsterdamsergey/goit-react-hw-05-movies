import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';
import { Home } from '../pages/Home/Home';
import { NotFound } from './NotFound/NotFound';
import { Box } from 'components/Box';
import { GlobalStyle } from './GlobalStyle';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export default function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Box>
  );
}
