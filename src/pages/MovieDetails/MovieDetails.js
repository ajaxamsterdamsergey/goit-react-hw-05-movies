import { useState, useEffect, Suspense } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Outlet } from 'react-router-dom';
import {
  Title,
  SubTitle,
  Text,
  NavItem,
  ButtonBack,
} from './MovieDetails.styled';

import * as API from '../../services/api';
import { Box } from '../../components/Box';
import { useParams, useLocation } from 'react-router-dom';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    API.getMovie(movieId).then(setMovie);
  }, [movieId]);
  if (!movie) {
    return null;
  }
  const { original_title, poster_path, vote_average, overview, genres } = movie;

  const reducedGenres = genres
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue.name + ',',
      ''
    )
    .slice(0, -1);
  const backLinkHref = location.state?.from ?? '/';
  return (
    <Box>
      <ButtonBack to={backLinkHref}>
        <IoMdArrowRoundBack />
        go back
      </ButtonBack>
      <Box display="flex" ml={32} gridGap="24px">
        <img
          src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
          height={500}
          alt={original_title}
        />
        <Box display="flex" flexDirection="column" gridGap="24px">
          <Title>{original_title}</Title>
          <div>
            <SubTitle>User Score</SubTitle> <Text>{vote_average * 10}% </Text>
          </div>
          <div>
            <SubTitle>Overview</SubTitle>
            <Text>{overview}</Text>
          </div>
          <div>
            <SubTitle>Genres</SubTitle> <Text> {reducedGenres}</Text>
          </div>
        </Box>
      </Box>
      <Suspense fallback={null}>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href} state={{ from: location.state?.from }}>
            {text}
          </NavItem>
        ))}
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default MovieDetails;
