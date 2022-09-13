import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Title = styled.div`
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.text};
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
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
`;
export const NavItem = styled(NavLink)`
  margin-left: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.secondary};
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
export const ButtonBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 96px;
  border: 2px green;
  border-radius: 4px;
  padding: 6px;
  background-color: tomato;
  margin: 8px 0 16px 32px;
  text-decoration: none;
  font-family: ${p => p.theme.fonts.dynaPuff};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.white};
`;
