import { Layout } from './layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactsView } from '../views/contactsView/ContactsView';
import RegistrationView from 'views/RegistrationView';
import LoginView from 'views/LoginView';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContactsView />} />
          <Route path="registration" element={<RegistrationView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {/* <Container>
        <Layout />
        <AppTitle>Phonebook</AppTitle>
        <AddContact />
        <ListTitle>Contacts</ListTitle>
        <Filter />
        <ContactList />
      </Container> */}
    </>
  );
}
