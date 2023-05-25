import React, { useCallback, useEffect, useState } from 'react';
import { Chat, ChatWrapper, Container, Main, Top } from './styles';
import profilePic from '../../assets/images/perfil.jpg';
import verifyIcon from '../../assets/images/verificado.png';
import BotMessageBox from '../../components/ChatBox';
import InputMessage from '../../components/InputMessage';
import { messagesData } from '../../mock/messages/messages';

const Home: React.FC = () => {
  const [renderIndex, setRenderIndex] = useState(0);
  const [stopRender, setStopRender] = useState(false);

  const handleClick = useCallback(() => {
    console.log(stopRender)
    setStopRender(false);
    setRenderIndex(3);
  }, [stopRender]);

  useEffect(() => {
    console.log(stopRender)
    if (renderIndex < messagesData.length - 1 && (stopRender === false && renderIndex !== 2)) {
      const timer = setInterval(() => {
        setRenderIndex((prevIndex) => prevIndex + 1);
      }, 1500); // Adjust the delay time here (in milliseconds)

      return () => {
        clearInterval(timer);
      };
    }
    if(renderIndex === 2 && stopRender === false) {
      const timer = setInterval(() => {
        setRenderIndex((prevIndex) => prevIndex);
      }, 1500);

      return () => {
        clearInterval(timer);
        handleClick();
      };
    }

    return
  }, [renderIndex, stopRender, handleClick]);


  return (
    <Container>
      <Top />
      <Main>
        <ChatWrapper>
          <header>
            <img className="profile" src={profilePic} alt="foto" />
            <div>
              <p className="name">
                Luiz | Detetive Digital <img src={verifyIcon} alt="verificado" />
              </p>
              <p className="staus">online</p>
            </div>
          </header>

          <Chat>
            {messagesData.map((message, index) => {
              if (index > renderIndex) return null; // Skip rendering messages after the current renderIndex
              if (message.id === 3 && !stopRender) {
                return (
                  <React.Fragment key={message.id}>
                    <InputMessage onButtonClick={handleClick} />
                  </React.Fragment>
                );
              } else if (message.id === 6) {
                return (
                  <React.Fragment key={message.id}>
                    {message.component}
                  </React.Fragment>
                );
              } else if (message.id !== null) {
                return (
                  <React.Fragment key={message.id}>
                    <BotMessageBox key={message.id} message={message.message} />
                  </React.Fragment>
                );
              }
              return null;
            })}
          </Chat>
        </ChatWrapper>
      </Main>
    </Container>
  );
};

export default Home;
