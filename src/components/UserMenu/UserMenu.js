import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import Button from 'react-bootstrap/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div className="d-flex">
      <h2 className="align-middle important!">Welcome, {name}</h2>
      <Button
        className="ms-5"
        variant="outline-info"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </Button>
    </div>
  );
};

export default UserMenu;
