import styled from 'styled-components';
import { Row as BootsRow, Col as BootsCol } from 'react-bootstrap';

export const Row = styled(BootsRow)`
  margin: 0;
`;

export const Col = styled(BootsCol)`
  padding: 0;
`;

export const Container = styled.div`
  height: 100vh;
`;

/* TITLE */

export const Title = styled.h1`
  color: black;
  font-size: 23px;
  margin: 30px 0 0 30px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

/* TABLES */

export const TableContainer = styled.section`
  height: 100vh;
  display: flex;
  padding: 20px;
  margin: 15px 0 50px 0;
  justify-content: center;
  align-items: flex-start;
  overflow-y: scroll;

  @media screen and (max-width: 1056px) {
    overflow: scroll;
    display: block;
  }
`;

export const Table = styled.table`
  text-align: center;
`;

export const Thead = styled.thead`
  background: #c9cbff;
  color: #272343;
`;

export const Tbody = styled.tbody`
  background-color: #f1f1f1;
`;

export const Tr = styled.tr`
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #2C272E
  

  :hover {
    background: #dddddd;
  }
`;

export const Th = styled.th`
  padding: 10px;
`;

export const Td = styled.td`
  padding: 18px;
`;

export const InputLink = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 0;
  outline-style: none;
  overflow: hidden;
  width: 250px;
  text-align: center;
  background-color: #f7f7f7;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

/*  FORMS */

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Card = styled.div`
  background-color: #f6f6f6;
  width: 600px;
  border-radius: 20px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  margin: 25px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 656px) {
    display: grid;
    justify-content: center;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  text-align: center;
  margin: 0 15px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 0;
  outline-style: none;
  overflow: hidden;
  width: 400px;
  text-align: center;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ButtonFormContainer = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonForm = styled.button`
  background-color: #7cbd1e;
  color: #fafafa;
  border-radius: 5px;
  height: 38px;
  border-style: none;
  width: 30%;

  @media (max-width: 452px) {
    width: 100%;
  }
`;
