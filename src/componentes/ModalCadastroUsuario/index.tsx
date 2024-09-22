import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"

import imagemPrincipal from './assets/login.png'

import './ModalCadastroUsuario.css'
import axios from "axios"

interface PropsModalCadastroUsuario {
  aberta: boolean,
  aoFechar: () => void
}

const ModalCadastroUsuario = ({ aberta, aoFechar }: PropsModalCadastroUsuario) => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [complemento, setComplemento] = useState('')
  const [cep, setCep] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaConfirmada, setSenhaConfirmada] = useState('')

  const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const usuario = {
      nome,
      email,
      senha,
      endereco,
      cep,
      complemento
    }
    axios.post('http://localhost:8000/public/registrar', usuario)
      .then((res) => {
        console.log(res)
        alert('Usuário foi cadastrado com sucesso!')
        setNome('')
        setEmail('')
        setEndereco('')
        setComplemento('')
        setCep('')
        setSenha('')
        setSenhaConfirmada('')
      })
      .catch((err) => {
        console.log(err)
        alert('Erro ao cadastrar usuário!' + err)
      })
  }

  return (<AbModal
    titulo="Cadastrar"
    aberta={aberta}
    aoFechar={aoFechar}
  >
    <section className="corpoModalCadastro">
      <figure>
        <img src={imagemPrincipal} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
      </figure>
      <form onSubmit={aoSubmeterFormular}>
        <AbCampoTexto
          label="Nome"
          value={nome}
          onChange={setNome}
        />
        <AbCampoTexto
          label="E-mail"
          value={email}
          onChange={setEmail}
          type="email"
        />
        <AbCampoTexto
          label="Endereço"
          value={endereco}
          onChange={setEndereco}
        />
        <AbCampoTexto
          label="Complemento"
          value={complemento}
          onChange={setComplemento}
        />
        <AbCampoTexto
          label="CEP"
          value={cep}
          onChange={setCep}
        />
        <AbCampoTexto
          label="Senha"
          value={senha}
          onChange={setSenha}
          type="password"
        />
        <AbCampoTexto
          label="Confirmação da senha"
          value={senhaConfirmada}
          onChange={setSenhaConfirmada}
          type="password"
        />
        <div className="acoes">
          <AbBotao texto="Cadastrar" />
        </div>
      </form>
    </section>
  </AbModal>)
}

export default ModalCadastroUsuario