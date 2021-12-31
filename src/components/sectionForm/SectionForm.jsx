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

export const SectionForm = () => {
  return (
    <>
      <Title>Section Register</Title>
      <Container>
        <FormContainer>
          <Card>
            <Row>
              <Col md={12}>
                <Item>
                  <Label>Number of section:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Hour of section:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Day of section:</Label>
                  <Input />
                </Item>
              </Col>
              <Col md={12}>
                <ButtonFormContainer>
                  <ButtonForm>Section Register</ButtonForm>
                </ButtonFormContainer>
              </Col>
            </Row>
          </Card>
        </FormContainer>
      </Container>
    </>
  );
};
