import styled from 'styled-components';

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
  margin-left: ${p => p.theme.space[5]}px;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
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
export const WrapperSubTitle = styled.div`
  display: flex;
`;
export const Content = styled.div`
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
`;
export const Message = styled.p`
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: ${p => p.theme.space[5]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.text};
`;
