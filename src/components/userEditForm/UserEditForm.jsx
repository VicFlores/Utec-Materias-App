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

export const UserEditForm = () => {
  return (
    <Layout>
      <Title>Edit User</Title>
      <Container>
        <FormContainer>
          <Card>
            <Row>
              <Col md={12}>
                <Item>
                  <Label>Name of teacher:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Lastname of subject:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Institutional mail:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <ButtonFormContainer>
                  <ButtonForm>Edit user</ButtonForm>
                </ButtonFormContainer>
              </Col>
            </Row>
          </Card>
        </FormContainer>
      </Container>
    </Layout>
  );
};
