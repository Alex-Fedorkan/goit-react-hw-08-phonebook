import { Box, Container, Typography } from '@material-ui/core';
import ApplicationBar from '../components/AppBar/AppBar';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

const ContactsView = () => {
  return (
    <>
      <ApplicationBar />
      <Container>
        <Box>
          <Typography variant="h4">Phonebook</Typography>
          <ContactForm />
          <Typography variant="h4">Contacts</Typography>
          <Filter />
          <ContactList />
        </Box>
      </Container>
    </>
  );
};

export default ContactsView;
