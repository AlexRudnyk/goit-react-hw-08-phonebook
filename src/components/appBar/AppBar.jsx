import { Navigation, AppWrapper, AppBarLink, AppTitle } from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <AppWrapper>
        <AppTitle>Phonebook</AppTitle>
        <Navigation>
          <AppBarLink to="registration">Registration</AppBarLink>
          <AppBarLink to="login">Login</AppBarLink>
        </Navigation>
      </AppWrapper>
    </>
  );
};
