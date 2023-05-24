import { BotMessageBoxContainer, ChatBubble, ChatPointer, MessageText, ProfilePic } from './styles';
import profPic from "../../assets/images/perfil.jpg";
import { useState, useEffect, useCallback } from 'react';
// import VideoMessage from '../../messages/';

interface IProps {
  message: string;
}

const BotMessageBox: React.FC<IProps> = ({ message }) => {

  const [typedMessage, setTypedMessage] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < message.length) {
        setTypedMessage((prevTypedText) => prevTypedText + message[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, message]);


  return (
    <BotMessageBoxContainer>
      <ProfilePic src={profPic} alt="Profile Picture" />
      <ChatBubble>
        <ChatPointer />
        <MessageText>
          {typedMessage}
        </MessageText>
      </ChatBubble>
    </BotMessageBoxContainer>
  );
};

export default BotMessageBox;
