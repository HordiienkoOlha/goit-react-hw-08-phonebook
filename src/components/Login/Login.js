import { Button, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Card
      className="justify-content-center p-3 mx-auto mt-5"
      style={{ width: '25rem' }}
    >
      <h2 className="mb-3 p-2 text-center">Sign In</h2>
      <Form className="mb-3 p-2" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={handleChange}
            // autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="passsword"
            placeholder="Passsword"
            // autoFocus
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="text-center">
          <Button
            variant="outline-info"
            type="submit"
            className="ms-auto"
            //   onClick={handleClose}
          >
            Sign in
          </Button>
        </Form.Group>
      </Form>
    </Card>
  );
};
export default Login;