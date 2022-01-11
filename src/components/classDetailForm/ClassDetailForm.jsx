import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { AuthContext } from '../../context/AuthContext';
import { ButtonTable, Title } from './style';
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '../../pages/GlobalStyle';
import { findClassDetail } from '../../helpers/findClassDetails';

export const ClassDetailForm = () => {
  const [classDetail, setClassDetail] = useState([]);
  const { auth } = useContext(AuthContext);

  const decoded = jwt_decode(auth);

  const getClassDetail = async () => {
    const findClass = await findClassDetail(decoded, auth);
    setClassDetail(findClass);
  };

  useEffect(() => {
    getClassDetail();
  }, []);

  return (
    <>
      <Title>Class detail for all teachers</Title>

      <TableContainer>
        <Table className="animate__animated animate__fadeInLeft">
          <Thead>
            <tr>
              <Th>Inscribed</Th>
              <Th>Teacher</Th>
              <Th>Subject</Th>
              <Th>Section</Th>
              <Th>Modality</Th>
              <Th>Link or classroom</Th>
            </tr>
          </Thead>

          <Tbody>
            {classDetail.reverse().map((classDetail) => {
              return (
                <Tr key={classDetail.id}>
                  <Td>{classDetail.inscribed}</Td>
                  <Td>{`${classDetail.firstname} ${classDetail.lastname}`}</Td>
                  <Td>{classDetail.name}</Td>
                  <Td>{classDetail.sections}</Td>
                  <Td>{classDetail.class_type}</Td>
                  {classDetail.classroom.length > 7 ? (
                    <Td>
                      <a target="_blank" href={classDetail.classroom}>
                        <ButtonTable>Virtual room</ButtonTable>
                      </a>
                    </Td>
                  ) : (
                    <Td>{classDetail.classroom}</Td>
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
