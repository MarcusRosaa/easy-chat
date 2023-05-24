import React from 'react'

const InputMessage: React.FC = () => {
  return (
    <form>
      <input type="text"  placeholder='EX: DDD + Número'/>
      <button>Enviar</button>
    </form>
  )
}

export default InputMessage;