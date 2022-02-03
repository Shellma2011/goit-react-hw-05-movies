import { NavLink, Outlet } from 'react-router-dom';
import { Nav, Container } from './Navigation.styled';
import styled from 'styled-components';

const NavigationLink = styled(NavLink)`
  padding: 10px 15px;
  margin-right: 15px;
  border-radius: 25px;
  text-decoration: none;
  color: #4682b4;
  border: 1px solid #4682b4;
  &.active {
    color: #e0ffff;
    border: 2px solid #e0ffff;
    background-color: #4169e1;
  }
`;

export const Layout = () => {
  return (
    <>
      <Nav>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Nav>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};
