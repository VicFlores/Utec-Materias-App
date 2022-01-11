import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode';
import { useNavigate } from '@reach/router';
import { Layout } from '../layout/Layout';
import { AuthContext } from '../../context/AuthContext';
import { findUserById } from '../../helpers/findUserById';
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
import { editUser } from '../../helpers/editUser';

export const UserEditForm = (props) => {
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const decoded = jwt_decode(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getUserById = async () => {
    const response = await findUserById(props.id, decoded, auth);
    setUser(response);
  };
  useEffect(() => {
    getUserById();
  }, []);

  const onSubmit = async (data) => {
    const result = await editUser(props.id, auth, decoded, data);
    if (result.message) {
      return setMessage(result.message);
    }
    navigate('/users');
  };

  return (
    <Layout>
      <Title>Edit User</Title>

      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Card>
            {user.map((user) => {
              return (
                <Row key={user.id}>
                  <Col md={12}>
                    <Item>
                      <Label>Name of teacher:</Label>
                      <Input
                        defaultValue={user.firstname}
                        type="text"
                        {...register('firstname', { required: true })}
                      />
                      {errors.firstname && <span>This field is required</span>}
                    </Item>
                  </Col>
                  <Col md={12}>
                    <Item>
                      <Label>Lastname of subject:</Label>
                      <Input
                        defaultValue={user.lastname}
                        type="text"
                        {...register('lastname', { required: true })}
                      />
                      {errors.lastname && <span>This field is required</span>}
                    </Item>
                  </Col>
                  <Col md={12}>
                    <Item>
                      <Label>Institutional mail:</Label>
                      <Input
                        defaultValue={user.email}
                        type="email"
                        {...register('email', { required: true })}
                      />
                      {errors.email && <span>This field is required</span>}
                    </Item>
                  </Col>
                  <Col md={12}>
                    <ButtonFormContainer>
                      <ButtonForm>Edit user</ButtonForm>
                    </ButtonFormContainer>
                  </Col>
                </Row>
              );
            })}
          </Card>
        </FormContainer>
      </Container>
    </Layout>
  );
};
