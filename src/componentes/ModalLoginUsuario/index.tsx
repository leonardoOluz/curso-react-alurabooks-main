import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import imagemPrincipal from "./assets/login.png"
import { Link } from "react-router-dom";
import "./ModalLoginUsuario.css"
import { useState } from "react";

interface PropsModalLoginUsuario {
  aberto: boolean;
  aoClickCadastrar: () => void;
  aoFechar: () => void;
}

const ModalLoginUsuario = ({ aberto, aoFechar, aoClickCadastrar }: PropsModalLoginUsuario) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const aoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const usuario = {
      email,
      senha
    }
    console.log(usuario)
  }

  return (
    <AbModal
      aberta={aberto}
      aoFechar={() => aoFechar()}
      titulo="LOGIN"
    >
      <section className="ModalLoginUsuario">
        <figure>
          <img src={imagemPrincipal} alt="Um monitor com cadeado e uma pessoa com uma chave" />
        </figure>
        <div className="ModalLoginUsuario-container">
          <form onSubmit={aoSubmit}>
            <AbCampoTexto
              value={email}
              placeholder="seuemail@maneiro.com.br"
              label="E-mail"
              onChange={setEmail}
              type="email"
            />
            <AbCampoTexto
              value={senha}
              placeholder="*****"
              label="Senha"
              onChange={setSenha}
              type="password"
            />
            <div className="ModalLoginUsuario-container__botao-logar">
              <p><Link to="#">Esqueci minha senha</Link></p>
              <AbBotao texto="Fazer Login" />
            </div>
          </form>
          <div className="ModalLoginUsuario-container__criar-conta">
            <p>Ainda não tem uma conta?</p>
            <AbBotao
              onClick={aoClickCadastrar}
              texto="Criar Conta"
            />
          </div>
        </div>
      </section>
    </AbModal>)
}

export default ModalLoginUsuario;