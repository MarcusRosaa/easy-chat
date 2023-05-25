import { styled } from "styled-components";
import backgroundImage from '../../assets/images/bg-chat.png';

export const Container = styled.main`
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  /* border: 5px solid blue; */
  position: relative;
`

export const Top = styled.div`
  width: 100%;
  height: 100px;
  background-color: #00a884;
`

export const Main = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  background-color: #E5DDD5;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ChatWrapper = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;

  /* border: 1px solid red; */
  background-color: #E5DDD5;
  background-image: url(${backgroundImage});
  background-size: 100%;
  background-position: center;
  background-repeat: repeat;

  @media (min-width: 768px) {
    max-width: 980px;
    height: 93vh;
    top: 30px;

    border: 2px solid #DBD4CA;
  }

  header {
    width: 100%;
    background-color: #F1F2F6;

    padding: 10px 10px;

    display: flex;
    align-items: center;

    .profile {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 12px;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-top: 6px;

      .name {
        display: flex;
        align-items: center;
        height: 10px;

        img {
          width: 18px;
          height: 18px;
          object-fit: contain;
          margin-left: 6px;
          margin-bottom: 1px;
        }
      }

      .staus {
        font-size: 13px;
        color: #7a8891;
        margin-top: 4px;
      }
    }
  }
`

export const Chat = styled.div`
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100% - 80px);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    @media (min-width: 768px) {
      width: 10px;
    }
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;

    @media (min-width: 768px) {
      border-radius: 0;
    }
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`