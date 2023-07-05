import React, {useState} from 'react';
import styled from "styled-components";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi';
import { IoMdPerson, IoMdMail, IoMdWallet, IoMdHome, IoMdSettings, IoMdSearch, IoMdExit, IoMdNavigate } from 'react-icons/io'
import {Link} from 'react-router-dom';
import perfil from '../../images/perfil.svg'


const WrapperBox = styled.div`
    display:flex;
    height: 100vh;
`

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`

const MenuLi = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    background: #555;
    border-radius: 15px;
  }
`

const Icon = styled.i`

`

const Text = styled.h1`
  color: #fff;
  margin-left: 10px;
  font-size: 20px;
`

const SideBar = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #333;
    width: ${props => (props.extended ? '290px' : '90px')};
    transition: width 0.3s ease-in-out;
`

const Content = styled.section`
  flex: 1;
  background: #f1f1f1;
`

const Article = styled.article`
  flex: 1;
  background: #e1e1e1;
`


const Button = styled.button`
    height: 50px;
    width: 50px;
    background: transparent;
    align-self: center;
    border: none;
    cursor: pointer;
    margin-bottom: 15px;
    &:hover {
    background: #555;
    border-radius: 15px;
  }
`

const InputStyled = styled.input`
  height: 100%;
  border: none;
  align-self: center;
  background: transparent;
  color: #fff;
  font-size: 16px;
  margin-left: 8px;
  outline: none;
`

const LinkStyled = styled(Link)`
  display: flex;
  list-style: none;
  align-items: center;
  align-self: center;
`

const BoxPerf = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
  img {
    height: 58px;
    width: 58px;
  }
`

export default function BoxPage() {

  const [extended, setExtended] = useState(true);

  const ToggleBar = () => {
    setExtended(!extended)
  }


  return (
    <WrapperBox>     
      <SideBar extended={extended}>
        <BoxPerf>
            <img src={perfil}></img>
        </BoxPerf>
        <Menu>
          <MenuLi>
              <Icon><IoMdSearch size={30} color="#fff"/></Icon>
              {extended && <InputStyled placeholder="Pesquisar..."></InputStyled>}         
          </MenuLi>
          <MenuLi>
            <LinkStyled to="/Dashboard">
              <Icon><IoMdHome size={30} color="#fff"/></Icon>
              {extended && <Text>Dashboard</Text>}            
            </LinkStyled>
          </MenuLi>
          <MenuLi>
            <LinkStyled to="/Pessoas">
              <Icon><IoMdPerson size={30} color="#fff"/></Icon>
              {extended && <Text>Pessoas</Text>}
            </LinkStyled>           
          </MenuLi>
          <MenuLi>
            <LinkStyled>
              <Icon><IoMdWallet size={30} color="#fff"/></Icon>
              {extended && <Text>Carteira</Text>}
            </LinkStyled>           
          </MenuLi>
          <MenuLi>
            <LinkStyled>
              <Icon><IoMdMail size={30} color="#fff"/></Icon>
              {extended && <Text>Usuarios</Text>}
            </LinkStyled>           
          </MenuLi>
          <MenuLi>
            <LinkStyled>
            <Icon><IoMdNavigate size={30} color="#fff"/></Icon>
            {extended && <Text>Mapa</Text>}
            </LinkStyled>           
          </MenuLi>
          <MenuLi>
            <LinkStyled>
            <Icon><IoMdSettings size={30} color="#fff"/></Icon>
            {extended && <Text>Configurações</Text>}
            </LinkStyled>           
          </MenuLi>
        </Menu>
        <LinkStyled to="/">
          <Button>
            <Icon><IoMdExit size={30} color="#fff"/></Icon>     
          </Button>
        </LinkStyled>
      <Button onClick={ToggleBar}>
        {extended ? <HiOutlineArrowSmLeft size={30} color="#fff" /> : <HiOutlineArrowSmRight size={30} color="#fff"/>}
      </Button>
      </SideBar>
      <Content>
        
      </Content>
    </WrapperBox>
  )
}


