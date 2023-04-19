import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';

import { Btn, Mail, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <Mail>{user.email}</Mail>
      <Btn type="button" onClick={() => dispatch(logout())}>
        Log out
      </Btn>
    </Wrapper>
  );
};
