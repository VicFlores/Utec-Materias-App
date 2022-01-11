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
import { newFaculty } from '../../helpers/newFaculty';
import { Layout } from '../layout/Layout';
import { useNavigate } from '@reach/router';

export const FacultyForm = () => {
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
    const result = await newFaculty(auth, decoded, data);

    if (result.message) {
      return setMessage(result.message);
    }

    navigate('/faculties');
  };

  return (
    <Layout>
      <Title>Faculty Register</Title>
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Card className="animate__animated animate__fadeIn">
            <Row>
              <Col md={12}>
                <Item>
                  <Label>Name of faculty:</Label>
                  <Input
                    type="text"
                    {...register('name', { required: true })}
                  />
                  {errors.name && <span>This field is required</span>}
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>School of subject:</Label>
                  <Input
                    type="text"
                    {...register('school', { required: true })}
                  />
                  {errors.school && <span>This field is required</span>}
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
    </Layout>
  );
};
