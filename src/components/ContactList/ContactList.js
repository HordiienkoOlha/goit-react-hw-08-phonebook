// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import Spinner from 'components/Spinner/Spinner';
import { getFilter, getContactsFilter } from 'redux/contacts/contactsSelectors';
import { useFetchContactsQuery } from 'redux/contacts/contactSlice';
import ContactItem from '../ContactsItem/ContactsItem';
// import { fetchContacts } from '../../redux/contacts/contactSlice';

const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();
  // const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = getContactsFilter(filter, data);

  // useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <>
      <ListGroup
        className="justify-content-center p-3 mx-auto mt-5"
        style={{ width: '25rem' }}
      >
        {isFetching && <Spinner />}
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
      </ListGroup>
    </>
  );
};

export default ContactList;
