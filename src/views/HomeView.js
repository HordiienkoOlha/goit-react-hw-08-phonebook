import { Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const HomeView = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center p-3 mx-auto mt-5">Welcome</h1>
      <p className="text-center p-3 mx-auto mt-5">
        This app can help you save your contacts.
        <br />
        Your contacts will be safely stored here
      </p>
      <div className=" d-flex justify-content-center">
        <Button
          variant="outline-primary"
          type="button"
          className="center-block mx-auto"
          onClick={() => navigate('/login')}
        >
          Let's start
        </Button>
      </div>
    </>
  );
};

export default HomeView;
