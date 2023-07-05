import styled from 'styled-components';

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`;

export const ContainerBox = styled.div`
    background-color: #444;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 55%;
    width: 50%;
`

export const TitleStyled = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
  align-self: center;
`

