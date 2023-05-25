import React, { useState } from 'react'
import { Container } from './styles';
import formatPhone from '../../utils/formatPhone';

interface IProps {
  onButtonClick: () => void;
}

const InputMessage: React.FC<IProps> = ({ onButtonClick }) => {
  const [number, setNumber] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(formatPhone(event.target.value));
  };


  return (
    <Container>
      <input type="text"  placeholder='EX: DDD + Número' value={number} onChange={handleInputChange} maxLength={16}/>
      <button onClick={onButtonClick} type='button'>Enviar</button>
    </Container>
  )
}

export default InputMessage;