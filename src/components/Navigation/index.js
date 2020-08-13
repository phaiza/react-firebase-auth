import React from "react";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { Container, Menu, MenuItem, Image } from "semantic-ui-react";
import logo from "../../img/logo.png";
import SignOutButton from "../SignOut";

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <Menu>
    <Container>
      <Menu.Item as="a" header>
        <Image size="mini" src={logo} />
      </Menu.Item>
      <MenuItem as="a" name="home">
        <Link to={ROUTES.HOME}>Home</Link>
      </MenuItem>
      <MenuItem as="a" name="signin">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </MenuItem>
      <MenuItem as="a" name="landing">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </MenuItem>

      <MenuItem as="a" name="account">
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </MenuItem>
      <MenuItem as="a" name="admin">
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </MenuItem>
      <MenuItem as="a" name="signout">
        <SignOutButton />
      </MenuItem>
    </Container>
  </Menu>
);
const NavigationNonAuth = () => (
  <Menu>
    <Container>
      <Menu.Item as="a" header>
        <Image size="mini" src={logo} />
      </Menu.Item>
      <MenuItem as="a" name="landing">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </MenuItem>

      <MenuItem as="a" name="signin">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </MenuItem>
    </Container>
  </Menu>
);

export default Navigation;
