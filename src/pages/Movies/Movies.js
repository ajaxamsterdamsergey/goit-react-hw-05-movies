import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import * as API from '../../services/api';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Box } from '../../components/Box';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState(null);
  const filmName = searchParams.get('searchQuery') ?? '';
  useEffect(() => {
    if (filmName === '') {
      setMovieName(null);
    } else {
      API.getSearchMovies(filmName).then(setMovieName);
    }
  }, [filmName]);
  useEffect(() => {
    if (filmName === '') return;
  }, [filmName]);
  const updateQueryString = searchQuery => {
    const nextParams = searchQuery !== '' ? { searchQuery } : {};
    setSearchParams(nextParams);
  };
  const handleSubmit = () => {
    return;
  };
  return (
    <Box>
      <SearchBar
        onChange={updateQueryString}
        handleSubmit={handleSubmit}
        value={filmName}
      />
      {movieName && (
        <MoviesList movies={movieName} state={{ from: location }} />
      )}
    </Box>
  );
};
export default Movies;
