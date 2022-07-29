
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from 'components/PrivateRoute';
import { authOperations, authSelectors } from './redux/auth';
import AppBar from 'components/AppBar/AppBar';

const HomeView = lazy(() => import('views/HomeView'));
const ContactsView = lazy(() => import('views/ContactsView'));
const NotFoundView = lazy(() => import('views/NotFoundView'));
const Register = lazy(() => import('components/Register/Register'));
const Login = lazy(() => import('components/Login/Login'));

export const App = () => {
    const dispatch = useDispatch();
   const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
{!isFetchingCurrentUser && (<Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomeView />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" exact element={<PrivateRoute><ContactsView /></PrivateRoute>} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>)}
    </>
  );
};

       //  {/* <Route path="contacts" ><PrivateRoute to={() => <Navigate to="contacts" }> <ContactsView /></PrivateRoute></Route> */}
        
          // {/* <PrivateRoute path="contacts"><ContactsView /></PrivateRoute> */}
          
//       <AppBar />
//       <Routes>
//         <Route path="/" exact element={<HomeView />}>
//           <Route path="register" element={<Register />} />
//           <Route path="login" element={<Login />} >
// {/* <Route path="contacts" exact element={<PrivateRoute restricted><ContactsView /></PrivateRoute> */}
          
//           <Route path="contacts" exact element={<ContactsView />} />
//           </Route>
//         <Route path="*" element={<NotFoundView />} />
//         </Route>
//       </Routes>