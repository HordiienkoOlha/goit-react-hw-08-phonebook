// import { useSelector } from 'react-redux';
// import { Route } from 'react-router-dom';
// import { authSelectors } from '../redux/auth';
// import { useNavigate } from 'react-router-dom';

// export default function PublicRoute({
//   children,
//   restricted = false,
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
//   const navigate = useNavigate();
//   return (
//     <Route {...routeProps}>{shouldRedirect ? navigate('/') : children}</Route>
//   );
// }
