import React, { useEffect, useState } from 'react'
import { Chat, ChatWrapper, Container, Main, Top } from './styles';
import profilePic from "../../assets/images/perfil.jpg";
import verifyIcon from "../../assets/images/verificado.png";
import BotMessageBox from "../../components/ChatBox"

import { messagesData } from '../../mock/messages/messages';

const Home: React.FC = () => {
  const [renderIndex, setRenderIndex] = useState(0);

  useEffect(() => {
    if (renderIndex < messagesData.length - 1) {
      const timer = setInterval(() => {
        setRenderIndex((prevIndex) => prevIndex + 1);
      }, 1500); // Adjust the delay time here (in milliseconds)

      return () => {
        clearInterval(timer);
      };
    }
  }, [renderIndex]);

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
          {messagesData.slice(0, renderIndex + 1).map((message, index) => {
              return (
                <React.Fragment key={message.id}>
                  {message.component ? (
                    message.component
                  ) : (
                    <BotMessageBox key={message.id} message={message.message} />
                  )}
                </React.Fragment>
              );
            })}
          </Chat>
        </ChatWrapper>
      </Main>
    </Container>
  )
}

export default Home;
