import React from 'react'
import { Container } from './styles';

interface IProps {
  onButtonClick: () => void;
}

const InputMessage: React.FC<IProps> = ({ onButtonClick }) => {

  const handleClick = () => {
    console.log('continuar')
  }

  return (
    <Container>
      <input type="text"  placeholder='EX: DDD + Número'/>
      <button onClick={handleClick} type='button'>Enviar</button>
    </Container>
  )
}

export default InputMessage;