import styled from 'styled-components';
import { Col as BootsCol, Row as BootsRow } from 'react-bootstrap';

export const Row = styled(BootsRow)`
  width: 100%;
  margin: 0;
`;

export const Col = styled(BootsCol)`
  padding: 0;
`;

export const HeaderContainer = styled.header`
  background-color: #5d0a28;
  height: 65px;
  display: flex;
  padding: 0;
  color: #fcfcfc;
`;

export const LogoContainer = styled.figure`
  margin: 0;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 15px;

  @media screen and (max-width: 766px) {
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 60px;
`;

export const NameApp = styled.h3`
  font-size: 19px;
  margin: 0 0 0 12px;
`;

export const UserName = styled.h3`
  font-size: 15px;
  margin: 0;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: end;
  padding-right: 25px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const BurgerMenuContainer = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
  }
`;
export const BurgerMenu = styled.button`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    border: 0;
    border-radius: 5px;
    font-size: 28px;
    background-color: #d4d7dd;
  }
`;
