import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { useSelector } from 'react-redux';

export default function NavBar({ setFormOpen }) {
  const {authenticated} = useSelector(state => state.auth);

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
         <h1>GymShare</h1>
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Treniruotės' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button  inverted content='Sukurti treniruotę' />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu />
        ) : (
          <SignedOutMenu />
        )}
      </Container>
    </Menu>
  );
}
