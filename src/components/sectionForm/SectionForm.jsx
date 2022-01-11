import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode';
import { AuthContext } from '../../context/AuthContext';
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
import { newSection } from '../../helpers/newSection';
import { Layout } from '../layout/Layout';
import { useNavigate } from '@reach/router';

export const SectionForm = () => {
  const [message, setMessage] = useState('');
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const decoded = jwt_decode(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await newSection(auth, decoded, data);

    if (result.message) {
      return setMessage(result.message);
    }

    navigate('/sections');
  };

  return (
    <Layout>
      <Title>Section Register</Title>
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Card className="animate__animated animate__fadeIn">
            <Row>
              <Col md={12}>
                <Item>
                  <Label>Number of section:</Label>
                  <Input
                    type="number"
                    {...register('sections', { required: true })}
                  />
                  {errors.sections && <span>This field is required</span>}
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Day of section:</Label>
                  <Input
                    type="text"
                    {...register('days', { required: true })}
                  />
                  {errors.days && <span>This field is required</span>}
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Hour of section:</Label>
                  <Input
                    type="text"
                    {...register('hours', { required: true })}
                  />
                  {errors.hours && <span>This field is required</span>}
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
    </Layout>
  );
};
