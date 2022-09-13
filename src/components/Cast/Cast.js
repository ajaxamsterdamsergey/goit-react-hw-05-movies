import { useState, useEffect } from 'react';
import { List, Item, Wrapper, Text, SubTitle } from './Cast.styled';
import johnsonImg from '../../images/images.jpg';
import { Box } from '../Box';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    API.getCast(movieId).then(setCast);
  }, [movieId]);
  if (!cast) {
    return null;
  }
  const { name } = cast.cast;
  return (
    <Box>
      <List>
        {cast.cast.map(data => (
          <Item key={data.id}>
            {data.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`}
                alt={name}
              />
            ) : (
              <img src={johnsonImg} width={300} height={450} alt={name} />
            )}
            <Text>{data.name}</Text>
            <Wrapper>
              <SubTitle>Character:</SubTitle>
              <Text>{data.character}</Text>
            </Wrapper>
          </Item>
        ))}
      </List>
    </Box>
  );
};

export default Cast;
