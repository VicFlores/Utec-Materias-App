import React from 'react';
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

export const SubjectForm = () => {
  return (
    <>
      <Title>Subject Register</Title>
      <Container>
        <FormContainer>
          <Card>
            <Row>
              <Col md={12}>
                <Item>
                  <Label>Name of subject:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Code of subject:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <ButtonFormContainer>
                  <ButtonForm>Subject Register</ButtonForm>
                </ButtonFormContainer>
              </Col>
            </Row>
          </Card>
        </FormContainer>
      </Container>
    </>
  );
};
