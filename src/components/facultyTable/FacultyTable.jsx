import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { AuthContext } from '../../context/AuthContext';
import { Link, Button } from './style';
import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Table,
} from '../../pages/GlobalStyle';
import { findFaculties } from '../../helpers/findFaculties';

export const FacultyTable = () => {
  const [faculties, setFaculties] = useState([]);
  const { auth } = useContext(AuthContext);

  const decoded = jwt_decode(auth);

  const getFaculties = async () => {
    const getFaculty = await findFaculties(decoded, auth);
    setFaculties(getFaculty);
  };

  useEffect(() => {
    getFaculties();
  }, []);

  return (
    <>
      <Button>
        <Link to="/new-faculty">Create faculty</Link>
      </Button>

      <TableContainer>
        <Table className="animate__animated animate__fadeInLeft">
          <Thead>
            <tr>
              <Th>Name of faculty</Th>
              <Th>School of faculty</Th>
            </tr>
          </Thead>

          <Tbody>
            {faculties.reverse().map((faculty) => {
              return (
                <Tr key={faculty.id}>
                  <Td>{faculty.name}</Td>
                  <Td>{faculty.school}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
