import React from 'react'
import { Button, Icon, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 450px;
`

const LoginButton = ({ onFacebookLogin, onTwitterLogin, onGoogleLogin }) => (
  <Wrapper>
    <Segment attached="top">
      <Button fluid color="facebook" onClick={onFacebookLogin}>
        <Icon name="facebook" /> Facebook
      </Button>
    </Segment>
    <Segment attached>
      <Button fluid color="twitter" onClick={onTwitterLogin}>
        <Icon name="twitter" /> Twitter
      </Button>
    </Segment>
    <Segment attached="bottom">
      <Button fluid color="google plus" onClick={onGoogleLogin}>
        <Icon name="google plus" /> Google Plus
      </Button>
    </Segment>
  </Wrapper>
)

export default LoginButton
