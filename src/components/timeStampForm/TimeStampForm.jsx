import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode';
import { Layout } from '../../components/layout/Layout';
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
import { editTimeStamp } from '../../helpers/editTimeStamp';
import { useNavigate } from '@reach/router';

export const TimeStampForm = (props) => {
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
    const date = new Date();

    const info = {
      finish: `${date.toDateString()} ${date.toLocaleTimeString()}`,
      students: data.students,
    };

    const result = await editTimeStamp(props.id, auth, decoded, info);
    if (result.message) {
      return setMessage(result.message);
    }
    navigate('/timestamp/me');
  };

  return (
    <Layout>
      <Container>
        <Title>Time Stamp Lessons Register</Title>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <Row>
              <Col md={12}>
                <Item>
                  <Label>Students</Label>
                  <Input
                    type="number"
                    {...register('students', { required: true })}
                  />
                  {errors.sections && <span>This field is required</span>}
                </Item>
              </Col>

              <Col md={12}>
                <ButtonFormContainer>
                  <ButtonForm>Finish</ButtonForm>
                </ButtonFormContainer>
              </Col>
            </Row>
          </Card>
        </FormContainer>
      </Container>
    </Layout>
  );
};
