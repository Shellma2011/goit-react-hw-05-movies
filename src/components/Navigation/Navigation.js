import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  text-align: center;
  border-bottom: 2px solid black;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const NavigationLink = styled(NavLink)`
  padding: 10px 15px;
  margin-right: 15px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  border: 2px solid black;
  &.active {
    color: orange;
    border: 2px solid orange;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-top: 20px;
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
