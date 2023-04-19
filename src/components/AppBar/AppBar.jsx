import { useSelector } from 'react-redux';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Container, Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Header>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
};
