import InputMessage from '../../components/InputMessage'
import VideoMessage from '../../components/VideoMessage'

export const messagesData = [
  {
    id: 1,
    component: null,
    message: 'Olá, me chamo luiz e sou detetive digital a mais de 10 anos!',
  },
  {
    id: 2,
    component: null,
    message: 'Para ver as mensagens, digite o número de quem você quer monitorar no campo abaixo',
  },
  {
    id: 3,
    component: <InputMessage onButtonClick={() => setIsInputRendered(true)} key={Math.random()} />,
    message: '',
  },
  {
    id: 4,
    component: null,
    message: 'Ok estou analisando as mensagens…',
  },
  {
    component: null,
    message: 'Enquanto isso, assista a esse pequeno corte de poucos minutos do meu podcast, onde explico como funciona o nosso sistema…',
    id: 5
  },
  {
    message: '',
    component: <VideoMessage key={Math.random()}/>,
    id: 6

  },
  {
    id: 7,
    component: null,
    message: 'Já encontrei 1 mensagem suspeita…',
  },
  {
    id: 8,
    component: null,
    message: 'Aguarde, você logo terá acesso as mensagens, estou quase finalizando',
  },
  {
    id: 9,
    component: null,
    message: 'Estou surpreso, encontrei 9 mensagens e 3 fotos suspeitas...',
  },
  {
    id: 10,
    message: 'Click no botão abaixo e faça seu pagamento para ter acesso às mensagens agora...',
    component: null,
  },
]

function setIsInputRendered(arg0: boolean): void {
  throw new Error('Function not implemented.')
}
