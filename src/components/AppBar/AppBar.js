import { MdOutlineLocalMovies } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { NavItem } from './AppBar.styled';
import { Box } from '../Box';

const navItems = [
  { href: '', text: 'Home', icon: AiOutlineHome },
  { href: 'movies', text: 'Movies', icon: MdOutlineLocalMovies },
];
export const AppBar = () => {
  return (
    <Box as="header" p={4} height="100vh" borderRight="1px solid black">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="24" />
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
