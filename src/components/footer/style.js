import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 50px;
  background-color: #5d0a28;
  color: #fcfcfc;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 700px) {
    display: grid;
    height: 80px;
  }
`;

export const FooterText = styled.h4`
  font-size: 17px;
  text-align: center;
  margin: 0;
`;
