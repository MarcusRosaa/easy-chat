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

`