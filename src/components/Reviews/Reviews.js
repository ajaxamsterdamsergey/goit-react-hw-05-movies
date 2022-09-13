import { useState, useEffect } from 'react';
import { Box } from '../Box';
import {
  List,
  Item,
  SubTitle,
  Text,
  WrapperSubTitle,
  Content,
  Message,
} from './Reviews.styled';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    API.getReviews(movieId).then(setReviews);
  }, [movieId]);
  if (!reviews) {
    return null;
  }
  return (
    <Box>
      {reviews.results.length > 0 ? (
        <List>
          {reviews.results.map(data => (
            <Item key={data.id}>
              <WrapperSubTitle>
                <SubTitle>Author:</SubTitle>
                <Text>{data.author}</Text>
              </WrapperSubTitle>
              <Content>{data.content}</Content>
            </Item>
          ))}
        </List>
      ) : (
        <Message>We don't have any reviews for this movie</Message>
      )}
    </Box>
  );
};
export default Reviews;
