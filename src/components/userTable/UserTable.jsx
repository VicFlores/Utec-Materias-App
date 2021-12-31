import React, { useEffect, useState } from 'react';
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

export const UserTable = () => {
  return (
    <>
      <Button>
        <Link to="/new-user">Create users</Link>
      </Button>

      <TableContainer>
        <Table>
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
            <Tr>
              <Td>Vic Ferman</Td>
              <Td>Flores Escobar</Td>
              <Td>vicflores2211@gmail.com</Td>
              <Td>
                <Link to="/edit-user">
                  <ButtonTable options="edit">Edit</ButtonTable>
                </Link>
              </Td>
              <Td>
                <ButtonTable>Delete</ButtonTable>
              </Td>
            </Tr>

            <Tr>
              <Td>Fernando Jose</Td>
              <Td>Aguilar Rivas</Td>
              <Td>fjrivas@gmail.com</Td>
              <Td>
                <Link to="/edit-user">
                  <ButtonTable options="edit">Edit</ButtonTable>
                </Link>
              </Td>
              <Td>
                <ButtonTable>Delete</ButtonTable>
              </Td>
            </Tr>

            <Tr>
              <Td>Zaira Renee</Td>
              <Td>Flores Hernandez</Td>
              <Td>zaira22@gmail.com</Td>
              <Td>
                <Link to="/edit-user">
                  <ButtonTable options="edit">Edit</ButtonTable>
                </Link>
              </Td>
              <Td>
                <ButtonTable>Delete</ButtonTable>
              </Td>
            </Tr>
            <Tr>
              <Td>Madeline Melissa</Td>
              <Td>Cañada Hernandez</Td>
              <Td>mel45@gmail.com</Td>
              <Td>
                <Link to="/edit-user">
                  <ButtonTable options="edit">Edit</ButtonTable>
                </Link>
              </Td>
              <Td>
                <ButtonTable>Delete</ButtonTable>
              </Td>
            </Tr>
            <Tr>
              <Td>Kaylee Maria</Td>
              <Td>Henriquez Hernandez</Td>
              <Td>vicflores2211@gmail.com</Td>
              <Td>
                <Link to="/edit-user">
                  <ButtonTable options="edit">Edit</ButtonTable>
                </Link>
              </Td>
              <Td>
                <ButtonTable>Delete</ButtonTable>
              </Td>
            </Tr>
            <Tr>
              <Td>Andrea Elena</Td>
              <Td>Navas Hernandez</Td>
              <Td>vicflores2211@gmail.com</Td>
              <Td>
                <Link to="/edit-user">
                  <ButtonTable options="edit">Edit</ButtonTable>
                </Link>
              </Td>
              <Td>
                <ButtonTable>Delete</ButtonTable>
              </Td>
            </Tr>
            <Tr>
              <Td>Andrea Elena</Td>
              <Td>Navas Hernandez</Td>
              <Td>vicflores2211@gmail.com</Td>
              <Td>
                <Link to="/edit-user">
                  <ButtonTable options="edit">Edit</ButtonTable>
                </Link>
              </Td>
              <Td>
                <ButtonTable>Delete</ButtonTable>
              </Td>
            </Tr>
            <Tr>
              <Td>Andrea Elena</Td>
              <Td>Navas Hernandez</Td>
              <Td>vicflores2211@gmail.com</Td>
              <Td>
                <Link to="/edit-user">
                  <ButtonTable options="edit">Edit</ButtonTable>
                </Link>
              </Td>
              <Td>
                <ButtonTable>Delete</ButtonTable>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
