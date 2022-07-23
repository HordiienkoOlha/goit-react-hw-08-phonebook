import { Button, Card, Form } from 'react-bootstrap';

const HomeView = () => {
  return (
    <>
      <Card
        className="justify-content-center p-3 mx-auto mt-5"
        style={{ width: '25rem' }}
      >
        <Form className="mb-3 p-2">
          <h2 className="mb-3 p-2 text-center">Registration</h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Your name" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="passsword"
              placeholder="Passsword"
              // autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Button
              variant="outline-info"
              type="button"
              className="ms-auto"
              //   onClick={handleClose}
            >
              Register
            </Button>
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="outline-info"
              type="button"
              className="ms-auto"
              //   onClick={handleClose}
            >
              I am already registered
            </Button>
          </Form.Group>
        </Form>
      </Card>
<>
      <Card
        className="justify-content-center p-3 mx-auto mt-5"
        style={{ width: '25rem' }}
      >
        <h2 className="mb-3 p-2 text-center">Sign In</h2>
        <Form className="mb-3 p-2">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              // autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="passsword"
              placeholder="Passsword"
              // autoFocus
            />
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="outline-info"
              type="button"
              className="ms-auto"
              //   onClick={handleClose}
            >
              Sign in
            </Button>
          </Form.Group>
        </Form>
      </Card>
      </>
    </>
  );
};

export default HomeView;
