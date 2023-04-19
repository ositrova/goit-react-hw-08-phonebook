import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import {
  Btn,
  StyledForm,
  StyledInput,
  StyledLabel,
  Title,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = e.currentTarget;

    dispatch(register({ name, email, password }));
    e.currentTarget.reset();
  };

  return (
    <>
      <Title>Sign Up Form</Title>
      <StyledForm onSubmit={handleSubmit} autoComplete="on">
        <StyledLabel>
          Username
          <StyledInput type="text" name="name" />
        </StyledLabel>
        <StyledLabel>
          Email
          <StyledInput type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledInput type="password" name="password" />
        </StyledLabel>
        <Btn type="submit">Register</Btn>
      </StyledForm>
    </>
  );
};
