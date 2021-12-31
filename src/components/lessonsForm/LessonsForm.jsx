import React from 'react';
import { LessonContainer, Select, SelectOptions } from './style';
import {
  ButtonFormContainer,
  Col,
  FormContainer,
  Input,
  Item,
  Label,
  Row,
  ButtonForm,
  Card,
  Title,
} from '../../pages/GlobalStyle';

export const LessonsForm = () => {
  return (
    <LessonContainer>
      <Title>Lesson Register</Title>

      <FormContainer>
        <Card>
          <Row>
            <Col md={12}>
              <Item>
                <Label>Type of modality</Label>
                <Select>
                  <SelectOptions>Virtual</SelectOptions>
                  <SelectOptions>Presencial</SelectOptions>
                </Select>
              </Item>
            </Col>
            <Col md={12}>
              <Item>
                <Label>Link or classroom</Label>
                <Input />
              </Item>
            </Col>
            <Col md={12}>
              <ButtonFormContainer>
                <ButtonForm>Modality Register</ButtonForm>
              </ButtonFormContainer>
            </Col>
          </Row>
        </Card>
      </FormContainer>

      <FormContainer>
        <Card>
          <Row>
            <Col md={12}>
              <Item>
                <Label>Inscribed</Label>
                <Input />
              </Item>
            </Col>
            <Col md={12}>
              <Item>
                <Label>Subject</Label>
                <Select>
                  <SelectOptions>List of subjects</SelectOptions>
                </Select>
              </Item>
            </Col>
            <Col md={12}>
              <Item>
                <Label>Section</Label>
                <Select>
                  <SelectOptions>List of sections</SelectOptions>
                </Select>
              </Item>
            </Col>
            <Col md={12}>
              <Item>
                <Label>Modality</Label>
                <Select>
                  <SelectOptions>Last option registred</SelectOptions>
                </Select>
              </Item>
            </Col>
            <Col md={12}>
              <Item>
                <Label>Faculty</Label>
                <Select>
                  <SelectOptions>List of faculties</SelectOptions>
                </Select>
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
    </LessonContainer>
  );
};
