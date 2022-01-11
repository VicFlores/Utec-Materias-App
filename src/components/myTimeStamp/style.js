import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: #fafafa;

  &:hover {
    color: #ffffff;
  }
`;

export const ButtonTable = styled.button`
  background-color: #009dae;
  color: #fafafa;
  border-radius: 5px;
  height: 38px;
  border-style: none;
  width: 130px;
`;
