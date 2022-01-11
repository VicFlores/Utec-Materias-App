import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { AuthContext } from '../../context/AuthContext';
import { ButtonTable, Link, Title } from './style';
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '../../pages/GlobalStyle';
import { findClassDetailByEmail } from '../../helpers/findClassDetailByEmail';
import { newTimeStamp } from '../../helpers/newTimeStamp';

export const Dashboard = () => {
  const [user, setUser] = useState([]);
  const { auth } = useContext(AuthContext);

  const decoded = jwt_decode(auth);

  const getUserByEmail = async () => {
    const response = await findClassDetailByEmail(decoded, auth);
    setUser(response);
  };

  const handleTimeStampStart = async (id) => {
    const date = new Date();

    const data = {
      start: `${date.toDateString()} ${date.toLocaleTimeString()}`,
      idClassDetail: id,
    };

    await newTimeStamp(auth, decoded, data);
  };

  useEffect(() => {
    getUserByEmail();
  }, []);

  return (
    <>
      <Title>My Lessons</Title>

      <TableContainer>
        <Table className="animate__animated animate__fadeInLeft">
          <Thead>
            <tr>
              <Th>Inscribed</Th>
              <Th>Subject</Th>
              <Th>Section</Th>
              <Th>Hours</Th>
              <Th>Days</Th>
              <Th>Modality</Th>
              <Th>Link or classroom</Th>
              <Th>Time Stamp</Th>
            </tr>
          </Thead>

          <Tbody>
            {user.reverse().map((user) => {
              return (
                <Tr key={user.id}>
                  <Td>{user.inscribed}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.sections}</Td>
                  <Td>{user.hours}</Td>
                  <Td>{user.days}</Td>
                  <Td>{user.class_type}</Td>
                  {user.classroom.length > 7 ? (
                    <Td>
                      <a target="_blank" href={user.classroom}>
                        <ButtonTable>Virtual room</ButtonTable>
                      </a>
                    </Td>
                  ) : (
                    <Td>{user.classroom}</Td>
                  )}
                  <Td>
                    <Link to="/timestamp/me">
                      <ButtonTable
                        onClick={() => handleTimeStampStart(user.id)}
                      >
                        Time Stamp
                      </ButtonTable>
                    </Link>
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
