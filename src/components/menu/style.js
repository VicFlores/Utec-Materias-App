import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const MenuContainer = styled.nav`
  background-color: #630a10;
  height: 100%;

  @media screen and (max-width: 767px) {
    height: 100%;
    display: ${(props) => (props.menu ? 'flex' : 'none')};
  }
`;

export const SideBarUl = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const SideBarLi = styled.li`
  list-style: none;
  padding: 8px 0 8px 0;
`;

export const Link = styled(LinkRouter)`
  color: #fffdf6;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    color: #d3e4cd;
  }
`;
