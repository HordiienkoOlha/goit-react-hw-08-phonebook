import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { changeFilter } from 'redux/contacts/actions';

const Filter = () => {
  const dispatch = useDispatch();
  console.log();
  return (
    <>
    <h2 className="header text-center p-3 mt-2">Contacts</h2>
      <Form className="justify-content-center p-3 mx-auto mt-5" style={{ width: '25rem' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Find contacts by name</Form.Label>
          <Form.Control
            type="text"
            name="filter"
            placeholder="Search..."
            onChange={event =>
              dispatch(changeFilter(event.target.value.trim()))
            }
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default Filter;
