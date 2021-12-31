import React from 'react';
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

export const Dashboard = () => {
  return (
    <>
      <Title>My Lessons</Title>

      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <Th>Inscribed</Th>
              <Th>Subject</Th>
              <Th>Section</Th>
              <Th>Hours</Th>
              <Th>Days</Th>
              <Th>Modality</Th>
              <Th>Link or classroom</Th>
            </tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>52</Td>
              <Td>PROGRAMACIÓN IV</Td>
              <Td>03</Td>
              <Td>8:00-9:30</Td>
              <Td>Lun-Vie</Td>
              <Td>Virtual</Td>
              <Td>
                <a
                  target="_blank"
                  href="https://teams.microsoft.com/l/team/19%3alw8H9l9fzwTT5EHtWFIPo4Iw_PKAUiMOWCqnC2XuUd41%40thread.tacv2/conversations?groupId=2eb58dd8-d277-4546-a843-229dc35b9cfc&tenantId=da59aced-10ef-4f8b-a2d8-68a3ce6bc7f1"
                >
                  <ButtonTable>Virtual room</ButtonTable>
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td>55</Td>
              <Td>BASES DE DATOS I</Td>
              <Td>01</Td>
              <Td>6:30-8:00</Td>
              <Td>Mar-Jue</Td>
              <Td>Presencial</Td>
              <Td>GB-Lab</Td>
            </Tr>
            <Tr>
              <Td>63</Td>
              <Td>ALGORITMOS</Td>
              <Td>05</Td>
              <Td>9:30-11:00</Td>
              <Td>Lun-Vie</Td>
              <Td>Virtual</Td>
              <Td>
                <a
                  target="_blank"
                  href="https://teams.microsoft.com/l/team/19%3alw8H9l9fzwTT5EHtWFIPo4Iw_PKAUiMOWCqnC2XuUd41%40thread.tacv2/conversations?groupId=2eb58dd8-d277-4546-a843-229dc35b9cfc&tenantId=da59aced-10ef-4f8b-a2d8-68a3ce6bc7f1"
                >
                  <ButtonTable>Virtual room</ButtonTable>
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td>52</Td>
              <Td>FÍSICA III</Td>
              <Td>02</Td>
              <Td>1:00-2:30</Td>
              <Td>Lun-Vie</Td>
              <Td>Presencial</Td>
              <Td>FM-204</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
