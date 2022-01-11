import React, { useContext, useState } from 'react';
import {
  ErrorMessage,
  Img,
  ImgContainer,
  LoginContainer,
  ErrorMessageApi,
} from './style';
import { useForm } from 'react-hook-form';
import { useNavigate } from '@reach/router';
import { loginUser } from '../../helpers/loginUser';
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
} from '../../pages/GlobalStyle';

export const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const { activeAuth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await loginUser(data);
    if (result.message) {
      return setMessage(result.message);
    }
    navigate('/');

    activeAuth(result.token);
  };

  return (
    <LoginContainer>
      <Container>
        <ImgContainer>
          <Img src="https://res.cloudinary.com/vicflores11/image/upload/v1641073548/undraw_authentication_fsn5_xvqhkh.svg" />
        </ImgContainer>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <ErrorMessageApi>{message}</ErrorMessageApi>
            <Row>
              <Col md={12}>
                <Item>
                  <Label>Institucional mail:</Label>
                  <Input
                    type="email"
                    {...register('email', { required: true })}
                  />
                </Item>
                <ErrorMessage>
                  {errors.email && <span>Institucional mail is required</span>}
                </ErrorMessage>
              </Col>
              <Col md={12}>
                <Item>
                  <Label>Password:</Label>
                  <Input
                    type="password"
                    {...register('passwd', { required: true })}
                  />
                </Item>
                <ErrorMessage>
                  {errors.passwd && <span>Password is required</span>}
                </ErrorMessage>
              </Col>
              <Col md={12}>
                <ButtonFormContainer>
                  <ButtonForm>Sign in</ButtonForm>
                </ButtonFormContainer>
              </Col>
            </Row>
          </Card>
        </FormContainer>
      </Container>
    </LoginContainer>
  );
};
