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

export const LogoutContainer = styled.div`
  width: 100%;
  margin: 10px 0 0 0;
  padding: 0 30px;
`;

export const Logout = styled.button`
  background-color: #7cbd1e;
  color: #fafafa;
  border-radius: 5px;
  height: 38px;
  border-style: none;
  width: 100%;
`;
