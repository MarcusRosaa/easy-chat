import React, { useState } from 'react'
import { Chat, ChatWrapper, Container, Main, Top } from './styles';
import profilePic from "../../assets/images/perfil.jpg";
import verifyIcon from "../../assets/images/verificado.png";
import BotMessageBox from "../../components/ChatBox"

import { firstMessages, secondMessages, lastMessages } from '../../mock/messages/messages';

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
            {firstMessages.map((message) => {
              return (
                <BotMessageBox key={message.id} message={message.message} />
              )
            })}
          </Chat>
        </ChatWrapper>
      </Main>
    </Container>
  )
}

export default Home;
