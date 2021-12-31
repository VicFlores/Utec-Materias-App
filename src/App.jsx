import { Router } from '@reach/router';
import React, { Suspense } from 'react';
import { UserEditForm } from './components/userEditForm/UserEditForm';
import { UserForm } from './components/userForm/UserForm';
import { ClassDetails } from './pages/ClassDetails';
import { Faculties } from './pages/Faculties';
import { Home } from './pages/Home';
import { Lessons } from './pages/Lessons';
import { NotFound } from './pages/NotFound';
import { Sections } from './pages/Sections';
import { Subjects } from './pages/Subjects';
import { Users } from './pages/Users';

export const App = () => {
  return (
    <Suspense>
      <Router>
        <NotFound default />
        <Home path="/" />
        <Users path="/users" />
        <UserForm path="/new-user" />
        <UserEditForm path="/edit-user" />
        <Subjects path="/subjects" />
        <Faculties path="/faculties" />
        <Sections path="/sections" />
        <Lessons path="/class" />
        <ClassDetails path="/classdetail" />
      </Router>
    </Suspense>
  );
};
