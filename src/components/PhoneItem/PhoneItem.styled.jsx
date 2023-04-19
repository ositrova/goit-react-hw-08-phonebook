import styled from 'styled-components';

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Btn = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  background-color: white;
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
