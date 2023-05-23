import React from 'react'
import { Chat, ChatWrapper, Container, Main, Top } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Top />
      <Main>
        <ChatWrapper>
          <header>
            {/* <img src=''/> */}
            header
          </header>

          <Chat>
            chat
          </Chat>
        </ChatWrapper>
      </Main>
    </Container>
  )
}

export default Home;
