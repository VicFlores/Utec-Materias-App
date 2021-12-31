import React from 'react';
import { Layout } from '../layout/Layout';
import {
  ButtonFormContainer,
  Col,
  FormContainer,
  Input,
  Item,
  Label,
  Row,
  Container,
  ButtonForm,
  Card,
  Title,
} from '../../pages/GlobalStyle';

export const UserForm = () => {
  return (
    <Layout>
      <Title>User Register</Title>
      <Container>
        <FormContainer>
          <Card>
            <Row>
              <Col md={12}>
                <Item>
                  <Label>Names of teacher:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Lastname of teacher:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Institutional mail</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <ButtonFormContainer>
                  <ButtonForm>User Register</ButtonForm>
                </ButtonFormContainer>
              </Col>
            </Row>
          </Card>
        </FormContainer>
      </Container>
    </Layout>
  );
};
