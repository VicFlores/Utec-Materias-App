import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode';
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
import { AuthContext } from '../../context/AuthContext';
import { newSubject } from '../../helpers/newSubject';
import { Layout } from '../layout/Layout';
import { useNavigate } from '@reach/router';

export const SubjectForm = () => {
  const [message, setMessage] = useState('');
  const { auth } = useContext(AuthContext);
  const decoded = jwt_decode(auth);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await newSubject(auth, decoded, data);

    if (result.message) {
      return setMessage(result.message);
    }

    navigate('/subjects');
  };

  return (
    <Layout>
      <Title>Subject Register</Title>
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Card className="animate__animated animate__fadeIn">
            <Row>
              <Col md={12}>
                <Item>
                  <Label>Name of subject:</Label>
                  <Input
                    type="text"
                    {...register('name', { required: true })}
                  />
                  {errors.name && <span>This field is required</span>}
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Code of subject:</Label>
                  <Input
                    type="text"
                    {...register('cod_subject', { required: true })}
                  />
                  {errors.cod_subject && <span>This field is required</span>}
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
    </Layout>
  );
};
