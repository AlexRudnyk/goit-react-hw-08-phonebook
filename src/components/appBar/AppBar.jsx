import { Navigation, AppWrapper, AppBarLink, AppTitle } from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <AppWrapper>
        <AppTitle>Phonebook</AppTitle>
        <Navigation>
          <AppBarLink>Registration</AppBarLink>
          <AppBarLink>Login</AppBarLink>
        </Navigation>
      </AppWrapper>
    </>
  );
};
