import { Link } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import { useState } from "react"
import ModalLoginUsuario from "../ModalLoginUsuario"

const BarraNavegacao = () => {
  const [modalCadastroAberta, setModalCadastroAberta] = useState(false)
  const [modalLoginAberta, setModalLoginAberta] = useState(false)

  return (<nav className="ab-navbar">
    <h1 className="logo">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo da AluraBooks" />
      </Link>
    </h1>
    <ul className="navegacao">
      <li>
        <a href="#!">Categorias</a>
        <ul className="submenu">
          <li>
            <Link to="/">
              Frontend
            </Link>
          </li>
          <li>
            <Link to="/">
              Programação
            </Link>
          </li>
          <li>
            <Link to="/">
              Infraestrutura
            </Link>
          </li>
          <li>
            <Link to="/">
              Business
            </Link>
          </li>
          <li>
            <Link to="/">
              Design e UX
            </Link>
          </li>
        </ul>
      </li>
    </ul>
    <ul className="acoes">
      <li>
        <BotaoNavegacao
          texto="Login"
          textoAltSrc="Icone representando um usuário"
          imagemSrc={usuario}
          onClick={() => setModalLoginAberta(true)}
        />
        <ModalLoginUsuario
          aberto={modalLoginAberta}
          aoFechar={() => setModalLoginAberta(false)}
          aoClickCadastrar={() => {
            setModalLoginAberta(false)
            setModalCadastroAberta(true)
          }}
        />
      </li>
      <li>
        <BotaoNavegacao
          texto="Cadastrar-se"
          textoAltSrc="Icone representando um usuário"
          imagemSrc={usuario}
          onClick={() => setModalCadastroAberta(true)}
        />
        <ModalCadastroUsuario
          aberta={modalCadastroAberta}
          aoFechar={() => setModalCadastroAberta(false)}
        />
      </li>
    </ul>
  </nav>)
}

export default BarraNavegacao