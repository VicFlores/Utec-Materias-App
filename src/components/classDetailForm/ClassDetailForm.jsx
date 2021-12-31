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

export const ClassDetailForm = () => {
  return (
    <>
      <Title>Class detail for all teachers</Title>

      <TableContainer>
        <Table>
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
            <Tr>
              <Td>52</Td>
              <Td>Vic Ferman Flores Escobar</Td>
              <Td>PROGRAMACIÓN IV</Td>
              <Td>03</Td>
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
              <Td>45</Td>
              <Td>Andrea Elena Navas Hernandez</Td>
              <Td>ANALISIS DEL CONSUMIDOR</Td>
              <Td>01</Td>
              <Td>Presencial</Td>
              <Td>BJ-404</Td>
            </Tr>
            <Tr>
              <Td>78</Td>
              <Td>Zaira Renee Flores Hernandez</Td>
              <Td>AUDITORIA INTERNA</Td>
              <Td>05</Td>
              <Td>Presencial</Td>
              <Td>FM-201</Td>
            </Tr>
            <Tr>
              <Td>63</Td>
              <Td>Kaylee Maria Henriquez Hernandez</Td>
              <Td>CREACION DE EMPRESAS (Bilingüe)</Td>
              <Td>02</Td>
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
              <Td>87</Td>
              <Td>Fernando Jose Aguilar Rivas</Td>
              <Td>TRATAMIENTO PSICOLOGICO DEL ADULTO</Td>
              <Td>01</Td>
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
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
