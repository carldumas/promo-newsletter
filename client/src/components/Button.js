import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  display: inline-block;
  background-color: #575555;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #383838;
  }
`;

export default Button;
