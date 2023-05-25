import React from 'react'
import { Container } from './styles';

interface IProps {
  onButtonClick: () => void;
}

const InputMessage: React.FC<IProps> = ({ onButtonClick }) => {

  return (
    <Container>
      <input type="text"  placeholder='EX: DDD + Número'/>
      <button onClick={onButtonClick} type='button'>Enviar</button>
    </Container>
  )
}

export default InputMessage;