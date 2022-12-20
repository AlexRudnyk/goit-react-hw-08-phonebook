import { AddContact } from './addContact/AddContact';
import ContactList from './contactList';
import Filter from './filter';
import { ListTitle, Container } from './App.styled';
import { Layout } from './layout/Layout';

export default function App() {
  return (
    <Container>
      <Layout />
      {/* <AppTitle>Phonebook</AppTitle> */}
      <AddContact />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      <ContactList />
    </Container>
  );
}
