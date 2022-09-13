import { useState, useEffect } from 'react';
import * as API from '../../services/api';
import { List, Item, Text, Title } from './Home.styled';
import { Box } from '../../components/Box';
import { useLocation } from 'react-router-dom';
export const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const res = await API.getTrendingMovies();
        setMovies(res.results);
      } catch (error) {
        console.log('error', error.message);
      }
    }
    getTrendingMovies();
  }, []);
  return (
    <Box>
      <Title>Trending today</Title>
      <List>
        {movies.map(data => (
          <Item key={data.id}>
            <Text
              to={`/movies/${data.id}`}
              state={{ from: location }}
              id={data.id}
            >
              {data.title}
            </Text>
          </Item>
        ))}
      </List>
    </Box>
  );
};
