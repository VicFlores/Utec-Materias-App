import { Router } from '@reach/router';
import React, { Suspense, useContext } from 'react';
import { UserEditForm } from './components/userEditForm/UserEditForm';
import { UserForm } from './components/userForm/UserForm';
import { ClassDetails } from './pages/ClassDetails';
import { Faculties } from './pages/Faculties';
import { Home } from './pages/Home';
import { Lessons } from './pages/Lessons';
import { PageLogin } from './pages/PageLogin';
import { PageNotFound } from './pages/PageNotFound';
import { Sections } from './pages/Sections';
import { Subjects } from './pages/Subjects';
import { Users } from './pages/Users';
import { AuthContext } from './context/AuthContext';
import { Redirect } from '@reach/router';
import { SubjectForm } from './components/subjectForm/SubjectForm';
import { FacultyForm } from './components/facultyForm/FacultyForm';
import { SectionForm } from './components/sectionForm/SectionForm';
import { TimeStampForm } from './components/timeStampForm/TimeStampForm';
import { MyTimeStamp } from './components/myTimeStamp/MyTimeStamp';

export const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <Suspense>
      <Router>
        <PageNotFound default />
        <PageLogin path="/login" />
        {!auth && <Redirect noThrow from="/" to="/login" />}
        {!auth && <Redirect noThrow from="/users" to="/login" />}
        {!auth && <Redirect noThrow from="/new-user" to="/login" />}
        {!auth && <Redirect noThrow from="/edit-user" to="/login" />}
        {!auth && <Redirect noThrow from="/subjects" to="/login" />}
        {!auth && <Redirect noThrow from="/new-subject" to="/login" />}
        {!auth && <Redirect noThrow from="/faculties" to="/login" />}
        {!auth && <Redirect noThrow from="/new-faculty" to="/login" />}
        {!auth && <Redirect noThrow from="/sections" to="/login" />}
        {!auth && <Redirect noThrow from="/new-section" to="/login" />}
        {!auth && <Redirect noThrow from="/class" to="/login" />}
        {!auth && <Redirect noThrow from="/classdetail" to="/login" />}
        {!auth && <Redirect noThrow from="/timestamp" to="/login" />}
        {!auth && <Redirect noThrow from="/timestamp/me" to="/login" />}
        {auth && <Redirect noThrow from="/login" to="/" />}
        <Home path="/" />
        <Users path="/users" />
        <UserForm path="/new-user" />
        <UserEditForm path="/edit-user/:id" />
        <Subjects path="/subjects" />
        <SubjectForm path="/new-subject" />
        <Faculties path="/faculties" />
        <FacultyForm path="/new-faculty" />
        <Sections path="/sections" />
        <SectionForm path="/new-section" />
        <Lessons path="/class" />
        <ClassDetails path="/classdetail" />
        <TimeStampForm path="/timestamp/:id" />
        <MyTimeStamp path="/timestamp/me" />
      </Router>
    </Suspense>
  );
};
