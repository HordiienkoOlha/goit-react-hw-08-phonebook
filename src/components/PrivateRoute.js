import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { authSelectors } from '../redux/auth';
import Navigation from 'react';

export default function PrivateRoute({
  children,
  //   navigate = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigation to={'/login'} />}
    </Route>
  );
}
