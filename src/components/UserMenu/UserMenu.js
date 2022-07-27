import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const UserMenu = () => {
  return (
    <div className="d-flex">
      <h2 className="align-middle important!">User name</h2>
      <Button className="ms-5" variant="outline-info">
        Log Out
      </Button>
    </div>
  );
};

export default UserMenu;
