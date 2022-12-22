import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Container, UserMenuText } from './UserMenu.styled';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Container>
      <UserMenuText>
        Welcome, <strong>{user.name}</strong>
      </UserMenuText>
      <Button
        type="button"
        onClick={handleLogOut}
        fullWidth
        variant="contained"
        // sx={{ mt: 3, mb: 2 }}
      >
        Logout
      </Button>
    </Container>
  );
};