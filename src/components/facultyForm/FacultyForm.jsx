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

export const FacultyForm = () => {
  return (
    <>
      <Title>Faculty Register</Title>
      <Container>
        <FormContainer>
          <Card>
            <Row>
              <Col md={12}>
                <Item>
                  <Label>Name of faculty:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>School of subject:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <ButtonFormContainer>
                  <ButtonForm>Faculty Register</ButtonForm>
                </ButtonFormContainer>
              </Col>
            </Row>
          </Card>
        </FormContainer>
      </Container>
    </>
  );
};
