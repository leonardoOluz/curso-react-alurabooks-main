import { Link } from "react-router-dom";
import "./MenuLateralMinhaConta.css"

const MenuLateralMinhaConta = () => {

  return (
    <ul className="NavegacaoMenuLateralMinhaConta">
      <li><Link to="pedidos">Pedidos</Link></li>
      <li><Link to="trocas">Trocas</Link></li>
      <li><Link to="cupons">cupons</Link></li>
      <li><Link to="dados">Seus dados</Link></li>
    </ul>
  )
};
export default MenuLateralMinhaConta;