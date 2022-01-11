import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode';
import { useNavigate } from '@reach/router';
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
import { AuthContext } from '../../context/AuthContext';
import { newUser } from '../../helpers/newUser';

export const UserForm = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const decoded = jwt_decode(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await newUser(auth, decoded, data);
    if (result.message) {
      return setMessage(result.message);
    }
    navigate('/users');
  };

  return (
    <Layout>
      <Title>User Register</Title>
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Card className="animate__animated animate__fadeIn">
            <Row>
              <Col md={12}>
                <Item>
                  <Label>Names of teacher:</Label>
                  <Input
                    type="text"
                    {...register('firstname', { required: true })}
                  />
                  {errors.firstname && <span>This field is required</span>}
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Lastname of teacher:</Label>
                  <Input
                    type="text"
                    {...register('lastname', { required: true })}
                  />
                  {errors.lastname && <span>This field is required</span>}
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Institutional mail</Label>
                  <Input
                    type="email"
                    {...register('email', { required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                </Item>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    {...register('passwd', { required: true })}
                  />
                  {errors.passwd && <span>This field is required</span>}
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
