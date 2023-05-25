import React, { useState } from 'react'
import { Container } from './styles';
import formatPhone from '../../utils/formatPhone';

interface IProps {
  onButtonClick: () => void;
}

const InputMessage: React.FC<IProps> = ({ onButtonClick }) => {
  const [number, setNumber] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleClick = () => {
    if(number.length > 13) {
      onButtonClick();
      setButtonDisabled(true);
    } else {
      alert('Número do telefone é obrigátorio');
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(formatPhone(event.target.value));
  };


  return (
    <Container>
      <input type="text"  placeholder='EX: DDD + Número' value={number} onChange={handleInputChange} maxLength={15}/>
      <button onClick={handleClick} type='button' disabled={buttonDisabled}>Enviar</button>
    </Container>
  )
}

export default InputMessage;