// import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import ContactForm from './ContactsForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components';
import { authOperations } from './redux/auth';
import AppBar from 'components/AppBar/AppBar';

const HomeView = lazy(() => import('views/HomeView'));
const ContactsView = lazy(() => import('views/ContactsView'));
const NotFoundView = lazy(() => import('views/NotFoundView'));
const Register = lazy(() => import('components/Register/Register'));
const Login = lazy(() => import('components/Login/Login'));

export const App = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomeView />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" exact element={<ContactsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </>
  );
};

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