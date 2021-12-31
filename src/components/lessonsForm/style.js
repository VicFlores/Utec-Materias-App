import styled from 'styled-components';

export const LessonContainer = styled.div`
  height: 100%;
  margin-bottom: 75px;

  @media screen and (max-width: 766px) {
    height: 100%;
  }
`;

export const Select = styled.select`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  padding: 8px 4px;
  width: 400px;
  outline-style: none;
  overflow: hidden;
  background-color: #e1e8eb;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const SelectOptions = styled.option`
  text-align: center;
`;
