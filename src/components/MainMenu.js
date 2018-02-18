import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { COLOR } from 'constants/Color'

const Wrapper = styled.div`
  text-align: center;
  background-color: ${COLOR.MAIN_RED};
`
const MainMenu = () => (
  <Wrapper>
    <Menu secondary inverted>
      <Menu.Item
        name="댓댓"
        as={Link}
        to="/"
      />
      <Menu.Item
        name="messages"
        position="right"
        as={Link}
        to="/mypage"
      >
        <Icon name="user" />
      </Menu.Item>
    </Menu>
  </Wrapper>
)

export default MainMenu

