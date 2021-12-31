import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: #fafafa;

  &:hover {
    color: #ffffff;
  }
`;

export const Button = styled.button`
  background-color: #7cbd1e;
  border-radius: 5px;
  height: 38px;
  border-style: none;
  margin: 40px 0 30px 40px;
`;

export const ButtonTable = styled.button`
  background-color: ${(props) => (props.options ? '#009DAE' : '#F90716')};
  color: #fafafa;
  border-radius: 5px;
  height: 38px;
  border-style: none;
  width: 100px;
`;
