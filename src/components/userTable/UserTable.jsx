import React, { useContext, useEffect, useState } from 'react';
import { Link, Button, ButtonTable } from './style';
import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Table,
} from '../../pages/GlobalStyle';
import { AuthContext } from '../../context/AuthContext';
import { findUsers } from '../../helpers/findUsers';
import jwt_decode from 'jwt-decode';
import { useNavigate } from '@reach/router';
import { deleteUser } from '../../helpers/deleteUser';

export const UserTable = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { auth, removeAuth } = useContext(AuthContext);

  const decoded = jwt_decode(auth);

  const getUsers = async () => {
    const response = await findUsers(decoded, auth);
    if (response.status === 401) {
      removeAuth();
      return navigate('/login');
    }

    return setUser(response);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    const res = await deleteUser(id, auth, decoded);
  };

  return (
    <>
      <Button>
        <Link to="/new-user">Create users</Link>
      </Button>

      <TableContainer>
        <Table className="animate__animated animate__fadeInLeft">
          <Thead>
            <tr>
              <Th>Firstname</Th>
              <Th>Lastname</Th>
              <Th>Email</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </tr>
          </Thead>

          <Tbody>
            {user.reverse().map((user) => {
              return (
                <Tr key={user.id}>
                  <Td>{user.firstname}</Td>
                  <Td>{user.lastname}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <Link to={`/edit-user/${user.id}`}>
                      <ButtonTable options="edit">Edit</ButtonTable>
                    </Link>
                  </Td>
                  <Td>
                    <ButtonTable onClick={() => handleDelete(user.id)}>
                      Delete
                    </ButtonTable>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
