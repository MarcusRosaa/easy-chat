import React from 'react'
import { Chat, ChatWrapper, Container, Main, Top } from './styles';
import profilePic from "../../assets/images/perfil.jpg";
import verifyIcon from "../../assets/images/verificado.png";

const Home: React.FC = () => {
  return (
    <Container>
      <Top />
      <Main>
        <ChatWrapper>
          <header>
            <img className= 'profile' src={profilePic} alt="foto"/>
            <div>
              <p className='name'>Luiz | Detetive Digital <img src={verifyIcon} alt="verificado" /></p>
              <p className='staus'>online</p>
            </div>
          </header>

          <Chat>
          </Chat>
        </ChatWrapper>
      </Main>
    </Container>
  )
}

export default Home;
