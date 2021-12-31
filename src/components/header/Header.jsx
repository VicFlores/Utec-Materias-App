import { Link } from '@reach/router';
import React, { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { UIContext } from '../../context/UIContext';
import {
  HeaderContainer,
  Logo,
  LogoContainer,
  NameApp,
  UserName,
  Row,
  Col,
  BurgerMenu,
  BurgerMenuContainer,
} from './style';

export const Header = () => {
  const { handleBurgerMenu } = useContext(UIContext);

  return (
    <Row>
      <HeaderContainer>
        <Col md={4} sm={8}>
          <LogoContainer>
            <Logo src="https://res.cloudinary.com/vicflores11/image/upload/v1640272303/utec_wafbok.png" />
            <NameApp>Utec Subjects</NameApp>
          </LogoContainer>
        </Col>

        <Col md={7}>
          <UserName>Welcome: Vic Ferman Flores Escobar</UserName>
        </Col>

        <BurgerMenuContainer>
          <Col sm={4}>
            <BurgerMenu onClick={handleBurgerMenu}>
              <AiOutlineMenu />
            </BurgerMenu>
          </Col>
        </BurgerMenuContainer>
      </HeaderContainer>
    </Row>
  );
};
