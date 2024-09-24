import { Outlet } from "react-router-dom";
import CabecalhoMinhaConta from "../../componentes/CabecalhoMinhaConta";
import FooterMinhaConta from "../../componentes/FooterMinhaConta";
import MenuLateralMinhaConta from "../../componentes/MenuLateralMinhaConta";
import "./MinhaConta.css"

const MinhaConta = () => {
  return (
    <section className="minhaContaSecao">
      <CabecalhoMinhaConta />
      <div className="minhaContaSecao__principal">
        <MenuLateralMinhaConta />
        <div className="minhaContaSecao__principal-conteudo">
          <Outlet />
        </div>
      </div>
      <FooterMinhaConta />
    </section>
  )
}

export default MinhaConta;