import { useLocation } from 'react-router-dom';
import { List, Item, Text } from './MoviesList.styled';
import { Box } from '../Box';
export const MoviesList = movies => {
  const location = useLocation();
  const items = movies.movies.results;
  return (
    <Box>
      <List>
        {items.map(data => (
          <Item key={data.id}>
            <Text
              to={`/movies/${data.id}`}
              id={data.id}
              state={{ from: location }}
            >
              {data.title}
            </Text>
          </Item>
        ))}
      </List>
    </Box>
  );
};
