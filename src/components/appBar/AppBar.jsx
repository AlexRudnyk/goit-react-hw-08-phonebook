import { AppWrapper, AppTitle } from './AppBar.styled';
import { AuthNav } from 'components/authNav/AuthNav';
import { UserMenu } from 'components/userMenu/UserMenu';

export const AppBar = () => {
  return (
    <>
      <AppWrapper>
        <AppTitle>Phonebook</AppTitle>
        <AuthNav />
        <UserMenu />
      </AppWrapper>
    </>
  );
};
