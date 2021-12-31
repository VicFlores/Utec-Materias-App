import React, { useContext } from 'react';
import { UIContext } from '../../context/UIContext';
import { Link, MenuContainer, SideBarLi, SideBarUl } from './style';

export const Menu = () => {
  const { burgerMenu } = useContext(UIContext);

  const handleCurrentPage = ({ isCurrent }) => {
    if (isCurrent) {
      return {
        style: {
          backgroundColor: '#911F27',
        },
      };
    }
  };

  return (
    <MenuContainer menu={burgerMenu}>
      <SideBarUl>
        <SideBarLi>
          <Link getProps={(isCurrent) => handleCurrentPage(isCurrent)} to="/">
            Home
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
      </SideBarUl>
    </MenuContainer>
  );
};
