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
import { findSections } from '../../helpers/findSections';

export const SectionTable = () => {
  const [sections, setSections] = useState([]);
  const { auth } = useContext(AuthContext);

  const decoded = jwt_decode(auth);

  const getSection = async () => {
    const section = await findSections(decoded, auth);
    setSections(section);
  };

  useEffect(() => {
    getSection();
  }, []);

  return (
    <>
      <Button>
        <Link to="/new-section">Create section</Link>
      </Button>

      <TableContainer>
        <Table className="animate__animated animate__fadeInLeft">
          <Thead>
            <tr>
              <Th>Section</Th>
              <Th>Days</Th>
              <Th>Hours</Th>
            </tr>
          </Thead>

          <Tbody>
            {sections.reverse().map((section) => {
              return (
                <Tr key={section.id}>
                  <Td>{section.sections}</Td>
                  <Td>{section.days}</Td>
                  <Td>{section.hours}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
