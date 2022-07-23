// import { Container } from 'react-bootstrap';
import ContactForm from 'components/ContactsForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const ContactsView = () => {
  return (
    <>
        <ContactForm />
        <Filter />
        <ContactList />
    </>
  );
};

export default ContactsView;
