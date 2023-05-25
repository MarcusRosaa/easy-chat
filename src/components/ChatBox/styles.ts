import { styled } from "styled-components";

export const BotMessageBoxContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ProfilePic = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const ChatBubble = styled.div`
  background-color: #ebebeb;
  padding: 8px;
  border-radius: 6px;
  position: relative;
  margin-left: 10px;
  width: fit-content;
  max-width: 800px;

  &.videoChatBubble {
    width: 100%;
    max-width: 400px;
  }
`;

export const ChatPointer = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #ebebeb;
  left: -8px;
  top: 5px;
  transform: translateY(-50%);
`;

export const MessageText = styled.div`
  margin: 0;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`;