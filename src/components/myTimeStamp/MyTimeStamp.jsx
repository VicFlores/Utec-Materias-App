import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { AuthContext } from '../../context/AuthContext';
import { Link, ButtonTable } from './style';
import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Table,
  Title,
} from '../../pages/GlobalStyle';
import { Layout } from '../layout/Layout';
import { findTimeStampByUser } from '../../helpers/findTimeStampByUser';

export const MyTimeStamp = (props) => {
  const [timeStamp, setTimeStamp] = useState([]);
  const { auth } = useContext(AuthContext);

  const decoded = jwt_decode(auth);

  const getTimeStamp = async () => {
    const getTime = await findTimeStampByUser(decoded, auth);
    setTimeStamp(getTime);
  };

  useEffect(() => {
    getTimeStamp();
  }, []);

  return (
    <Layout>
      <Title>Time Stamp Lessons Register</Title>
      <TableContainer>
        <Table className="animate__animated animate__fadeInLeft">
          <Thead>
            <tr>
              <Th>Start</Th>
              <Th>Finish</Th>
              <Th>Students</Th>
              <Th>Finish lesson</Th>
            </tr>
          </Thead>

          <Tbody>
            {timeStamp.reverse().map((timestamp) => {
              return (
                <Tr key={timestamp.id_time_stamp}>
                  <Td>{timestamp.start}</Td>
                  <Td>{timestamp.finish}</Td>
                  <Td>{timestamp.students}</Td>
                  <Td>
                    <Link to={`/timestamp/${timestamp.id_time_stamp}`}>
                      <ButtonTable>Finish class</ButtonTable>
                    </Link>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};
