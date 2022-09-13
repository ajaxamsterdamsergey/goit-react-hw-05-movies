import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  margin-top: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[5]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.text};
`;
export const Text = styled(Link)`
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.primary};
  text-decoration: none;
`;
export const List = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  list-style: none;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  margin: 0 auto;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: ${p => p.theme.space[5]}px;
  gap: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[2]}px;
`;
