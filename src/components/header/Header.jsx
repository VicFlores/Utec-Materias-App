import React, { useContext, useEffect, useMemo, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import jwt_decode from 'jwt-decode';

import { AuthContext } from '../../context/AuthContext';
import { UIContext } from '../../context/UIContext';
import { findUser } from '../../helpers/findUser';
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
  const [user, setUser] = useState([]);
  const { handleBurgerMenu } = useContext(UIContext);
  const { auth } = useContext(AuthContext);

  const decoded = jwt_decode(auth);

  const getUser = async () => {
    const response = await findUser(decoded, auth);
    setUser(response);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Row>
      <HeaderContainer>
        <Col md={4} sm={8}>
          <LogoContainer>
            <Logo src="https://res.cloudinary.com/vicflores11/image/upload/v1640272303/utec_wafbok.png" />
            <NameApp>Utec Subjects</NameApp>
          </LogoContainer>
        </Col>

        {user.map((user) => {
          return (
            <Col md={7} key={user.id}>
              <UserName className="animate__animated animate__fadeIn">
                Welcome: {user.firstname} {user.lastname}
              </UserName>
            </Col>
          );
        })}

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
