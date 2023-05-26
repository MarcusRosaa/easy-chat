import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 19px;
  display: flex;
  justify-content: center;
  animation: buttonFlick 0.6s ease-in-out infinite;


  a {
    background-color: #53B164;
    padding: 12px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    font-family: arial;
    letter-spacing: 0.5px;
    color: white;
  }

  @keyframes buttonFlick {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }
}
`;