import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations';

import {
  Btn,
  StyledForm,
  StyledInput,
  StyledLabel,
  Title,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.currentTarget;

    dispatch(login({ email, password }));
    e.currentTarget.reset();
  };

  return (
    <>
      <Title>Log In Form</Title>
      <StyledForm onSubmit={handleSubmit} autoComplete="on">
        <StyledLabel>
          Email
          <StyledInput type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledInput type="password" name="password" />
        </StyledLabel>
        <Btn type="submit">Log In</Btn>
      </StyledForm>
    </>
  );
};
