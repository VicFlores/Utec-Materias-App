import React from 'react';
import { Header } from '../header/Header';
import { Menu } from '../menu/Menu';
import { Footer } from '../footer/Footer';
import { Col, LayoutContainer, Row } from './style';
import { UIProvider } from '../../context/UIContext';

export const Layout = ({ children }) => {
  return (
    <UIProvider>
      <LayoutContainer>
        <Row>
          <Col md={12} sm={12}>
            <Header />
          </Col>

          <Col md={2}>
            <Menu />
          </Col>

          <Col md={10} sm={12}>
            {children}
          </Col>
        </Row>
      </LayoutContainer>

      <Footer />
    </UIProvider>
  );
};
