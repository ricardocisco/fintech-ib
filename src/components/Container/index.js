import React from 'react'
import {ScreenContainer, Container, ContainerBox, TitleStyled} from './style'
import { styled } from 'styled-components'
import { CustomInput } from '../Input/input'
import { ButtonStyled } from '../Button/style'
import { Link } from 'react-router-dom'

const LinkStyled = styled(Link)`
  list-style: none;
  align-self: center;
`

export default function Box() {

  return (
    <ScreenContainer>
      <Container>
      </Container>
      <Container backgroundColor="#999">
        <ContainerBox>
          <TitleStyled>CSBank</TitleStyled>
          <CustomInput label="Email" type="text" placeholder="Seu email" />
          <CustomInput label="Senha" type="password" placeholder="Sua senha" />
          <LinkStyled to="/Page">
            <ButtonStyled>Entrar</ButtonStyled>
          </LinkStyled>
        </ContainerBox>
      </Container>
    </ScreenContainer>
  )
}
