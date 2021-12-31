import React from 'react';
import { Layout } from '../components/layout/Layout';
import { UserTable } from '../components/userTable/UserTable';

export const Users = () => {
  return (
    <Layout>
      <UserTable />
    </Layout>
  );
};
