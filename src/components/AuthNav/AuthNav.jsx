import { StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Sign Up</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};