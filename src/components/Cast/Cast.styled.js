import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  list-style: none;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width: 360px;
  margin-left: ${p => p.theme.space[5]}px;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const SubTitle = styled.div`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.tomato};
`;

export const Text = styled.div`
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.text};
`;
export const Content = styled.div`
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
`;
