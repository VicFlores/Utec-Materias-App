import React, { useContext } from 'react';
import { useNavigate } from '@reach/router';
import jwt_decode from 'jwt-decode';
import { UIContext } from '../../context/UIContext';
import { AuthContext } from '../../context/AuthContext';
import {
  Link,
  Logout,
  LogoutContainer,
  MenuContainer,
  SideBarLi,
  SideBarUl,
} from './style';

export const Menu = () => {
  const { burgerMenu } = useContext(UIContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const decoded = jwt_decode(auth);

  const handleCurrentPage = ({ isCurrent }) => {
    if (isCurrent) {
      return {
        style: {
          backgroundColor: '#911F27',
        },
      };
    }
  };

  const handleLogout = async () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <MenuContainer menu={burgerMenu}>
      {decoded.roles === 'admin' ? (
        <SideBarUl>
          <SideBarLi>
            <Link getProps={(isCurrent) => handleCurrentPage(isCurrent)} to="/">
              Home
            </Link>
          </SideBarLi>
          <SideBarLi>
            <Link
              getProps={(isCurrent) => handleCurrentPage(isCurrent)}
              to="/timestamp/me"
            >
              TimeStamp
            </Link>
          </SideBarLi>
          <SideBarLi>
            <Link
              getProps={(isCurrent) => handleCurrentPage(isCurrent)}
              to="/users"
            >
              Users
            </Link>
          </SideBarLi>
          <SideBarLi>
            <Link
              getProps={(isCurrent) => handleCurrentPage(isCurrent)}
              to="/subjects"
            >
              Subjects
            </Link>
          </SideBarLi>
          <SideBarLi>
            <Link
              getProps={(isCurrent) => handleCurrentPage(isCurrent)}
              to="/faculties"
            >
              Faculties
            </Link>
          </SideBarLi>
          <SideBarLi>
            <Link
              getProps={(isCurrent) => handleCurrentPage(isCurrent)}
              to="/sections"
            >
              Sections
            </Link>
          </SideBarLi>
          <SideBarLi>
            <Link
              getProps={(isCurrent) => handleCurrentPage(isCurrent)}
              to="/class"
            >
              Lessons
            </Link>
          </SideBarLi>
          <SideBarLi>
            <Link
              getProps={(isCurrent) => handleCurrentPage(isCurrent)}
              to="/classdetail"
            >
              Class detail
            </Link>
          </SideBarLi>
          <LogoutContainer>
            <Logout type="button" onClick={handleLogout}>
              Logout
            </Logout>
          </LogoutContainer>
        </SideBarUl>
      ) : (
        <SideBarUl>
          <SideBarLi>
            <Link getProps={(isCurrent) => handleCurrentPage(isCurrent)} to="/">
              Home
            </Link>
          </SideBarLi>
          <SideBarLi>
            <Link
              getProps={(isCurrent) => handleCurrentPage(isCurrent)}
              to="/timestamp/me"
            >
              TimeStamp
            </Link>
          </SideBarLi>
          <LogoutContainer>
            <Logout type="button" onClick={handleLogout}>
              Logout
            </Logout>
          </LogoutContainer>
        </SideBarUl>
      )}
    </MenuContainer>
  );
};
