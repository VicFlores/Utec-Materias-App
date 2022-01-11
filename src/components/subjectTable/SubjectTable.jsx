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
import { findSubjects } from '../../helpers/findSubjects';

export const SubjectTable = () => {
  const [subjects, setSubjects] = useState([]);
  const { auth } = useContext(AuthContext);

  const decoded = jwt_decode(auth);

  const getSubjects = async () => {
    const getSubject = await findSubjects(decoded, auth);
    setSubjects(getSubject);
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <>
      <Button>
        <Link to="/new-subject">Create subject</Link>
      </Button>

      <TableContainer>
        <Table className="animate__animated animate__fadeInLeft">
          <Thead>
            <tr>
              <Th>Code Subject</Th>
              <Th>Subject</Th>
            </tr>
          </Thead>

          <Tbody>
            {subjects.reverse().map((subject) => {
              return (
                <Tr key={subject.id}>
                  <Td>{subject.cod_subject}</Td>
                  <Td>{subject.name}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
