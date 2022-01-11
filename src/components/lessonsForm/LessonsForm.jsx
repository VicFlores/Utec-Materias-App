import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode';
import { AuthContext } from '../../context/AuthContext';
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
import { findSubjects } from '../../helpers/findSubjects';
import { findUsers } from '../../helpers/findUsers';
import { findSections } from '../../helpers/findSections';
import { findFaculties } from '../../helpers/findFaculties';
import { newClassDetail } from '../../helpers/newclassDetail';
import { useNavigate } from '@reach/router';

export const LessonsForm = () => {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState([]);
  const [users, setUsers] = useState([]);
  const [sections, setSections] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const decoded = jwt_decode(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dataList = async () => {
    const getSubjects = await findSubjects(decoded, auth);
    const getUsers = await findUsers(decoded, auth);
    const getSections = await findSections(decoded, auth);
    const getFaculties = await findFaculties(decoded, auth);

    setSubject(getSubjects);
    setUsers(getUsers);
    setSections(getSections);
    setFaculties(getFaculties);
  };

  useEffect(() => {
    dataList();
  }, []);

  const onSubmit = async (data) => {
    const result = await newClassDetail(auth, decoded, data);
    if (result.message) {
      return setMessage(result.message);
    }

    navigate('/classdetail');
  };

  return (
    <LessonContainer>
      <Title>Lesson Register</Title>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Card className="animate__animated animate__fadeIn">
          <Row>
            <Col md={12}>
              <Item>
                <Label>Inscribed</Label>
                <Input
                  type="number"
                  {...register('inscribed', { required: true })}
                />
                {errors.inscribed && <span>This field is required</span>}
              </Item>
            </Col>
            <Col md={12}>
              <Item>
                <Label>Link or classroom</Label>
                <Input
                  type="text"
                  {...register('classroom', { required: true })}
                />
              </Item>
            </Col>
            <Col md={12}>
              <Item>
                <Label>Modality</Label>
                <Select
                  defaultValue={'Default'}
                  {...register('class_type', { required: true })}
                >
                  <SelectOptions disabled value="Default">
                    Select a type modality
                  </SelectOptions>
                  <SelectOptions>Virtual</SelectOptions>
                  <SelectOptions>Presencial</SelectOptions>
                </Select>
              </Item>
            </Col>
            <Col md={12}>
              <Item>
                <Label>Subject</Label>
                <Select
                  defaultValue={'Default'}
                  {...register('idSubject', { required: true })}
                >
                  <SelectOptions disabled value="Default">
                    Select a type subject
                  </SelectOptions>
                  {subject.map((subject) => {
                    return (
                      <SelectOptions value={subject.id} key={subject.id}>
                        {subject.name}
                      </SelectOptions>
                    );
                  })}
                </Select>
              </Item>
            </Col>
            <Col md={12}>
              <Item>
                <Label>Teacher</Label>
                <Select
                  defaultValue={'Default'}
                  {...register('idUser', { required: true })}
                >
                  <SelectOptions disabled value="Default">
                    Select a type teacher
                  </SelectOptions>
                  {users.map((user) => {
                    return (
                      <SelectOptions value={user.id} key={user.id}>
                        {`${user.firstname} ${user.lastname}`}
                      </SelectOptions>
                    );
                  })}
                </Select>
              </Item>
            </Col>
            <Col md={12}>
              <Item>
                <Label>Section</Label>
                <Select
                  defaultValue={'Default'}
                  {...register('idSection', { required: true })}
                >
                  <SelectOptions disabled value="Default">
                    Select a type section
                  </SelectOptions>
                  {sections.map((section) => {
                    return (
                      <SelectOptions value={section.id} key={section.id}>
                        {`# ${section.sections} / ${section.days} / ${section.hours} `}
                      </SelectOptions>
                    );
                  })}
                </Select>
              </Item>
            </Col>

            <Col md={12}>
              <Item>
                <Label>Faculty</Label>
                <Select
                  defaultValue={'Default'}
                  {...register('idFaculty', { required: true })}
                >
                  <SelectOptions disabled value="Default">
                    Select a type faculty
                  </SelectOptions>
                  {faculties.map((faculty) => {
                    return (
                      <SelectOptions
                        value={faculty.id}
                        key={faculty.id}
                      >{`${faculty.name} ${faculty.school}`}</SelectOptions>
                    );
                  })}
                </Select>
              </Item>
            </Col>
            <Col md={12}>
              <ButtonFormContainer>
                <ButtonForm>Class Register</ButtonForm>
              </ButtonFormContainer>
            </Col>
          </Row>
        </Card>
      </FormContainer>
    </LessonContainer>
  );
};
