import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 600px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 4px;
  background-color: #96c4f3;
  box-shadow: 2px 2px 3px 3px #727171;
`;

export const StyledLabel = styled.label`
  display: flex;
  gap: 6px;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 20px;
  color: rgb(69, 73, 78);
`;

export const Title = styled.h2`
  font-size: 40px;
  margin: 20px;
  text-align: center;
  color: rgb(69, 73, 78);
`;

export const StyledInput = styled.input`
  height: 50px;
  border-radius: 6px;
  padding: 10px 20px;
`;

export const Btn = styled.button`
  padding: 7px 15px;
  margin-top: 10px;
  border: none;
  border-radius: 7px;
  font-size: 18px;
  background-color: white;
  color: black;
  box-shadow: 2px 2px 3px 3px #727171;
  cursor: pointer;

  transition: transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    color: white;
    background-color: #629ee1;
  }
`;
