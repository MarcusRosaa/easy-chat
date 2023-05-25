import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 12px;

  input {
    border-radius: 5px;
    min-height: 50px;
    width: 270px;
    border-style: none;
    outline: 0;
    font-size: 18px;
    padding-left: 15px;
    padding-right: 15px;
  }

  button {
    background-color: #005745;
    width: 140px;
    height: 35px;
    border-radius: 5px;
    color: white;
    border-color: #005745;
    border-style: none;
    font-size: medium;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: arial;
    cursor: pointer;
  }
`;