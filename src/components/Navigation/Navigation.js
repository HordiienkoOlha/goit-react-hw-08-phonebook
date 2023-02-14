import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { ImAddressBook } from 'react-icons/im';

import styles from './Navigation.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Navbar bg="light" expand="lg" className="justify-content-center">
        {/* <Container className="justify-content-center"> */}
        {/* <Navbar.Brand className="ms-5">
            <NavLink exact="true" to="/">
              <ImAddressBook />
            </NavLink>
          </Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Navbar.Brand>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) =>
              isActive ? styles['active-link'] : styles.link
            }
          >
            Home
          </NavLink>
        </Navbar.Brand>

        {isLoggedIn ? (
          <>
            <Navbar.Brand>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? styles['active-link'] : styles.link
                }
              >
                Contacts
              </NavLink>
            </Navbar.Brand>{' '}
            <Navbar.Brand>
              <UserMenu />
            </Navbar.Brand>
          </>
        ) : (
          <AuthNav />
        )}
        {/* </Navbar.Collapse> */}
        {/* </Container> */}
      </Navbar>
    </>
  );
};

export default Navigation;
