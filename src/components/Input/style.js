import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 65%;
  align-self: center;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #fff;
  font-size: 22px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;