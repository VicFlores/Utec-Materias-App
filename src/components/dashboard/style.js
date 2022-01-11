import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Title = styled.h1`
  color: black;
  font-size: 23px;
  margin: 30px 0 10px 30px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

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
