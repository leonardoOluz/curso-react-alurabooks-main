import { AbBotao } from "ds-alurabooks";
import "./Pedidos.css";

const Pedidos = () => {
    return(
        <section className="secaoPedidos">
            <h1 className="secaoPedidos-titulo">Pedidos</h1>
            <div className="secaoPedidos__containerPedido">
                <ul>
                    <li>Pedido: <strong>123456</strong></li>
                    <li>Data do pedido: <strong>19/09/2024</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em: <strong>23/09/2024</strong></li>
                </ul>
                <AbBotao texto="Detalhes"/>
            </div>
            <div className="secaoPedidos__containerPedido">
                <ul>
                    <li>Pedido: <strong>123456</strong></li>
                    <li>Data do pedido: <strong>19/09/2024</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em: <strong>23/09/2024</strong></li>
                </ul>
                <AbBotao texto="Detalhes"/>
            </div>
            <div className="secaoPedidos__containerPedido">
                <ul>
                    <li>Pedido: <strong>123456</strong></li>
                    <li>Data do pedido: <strong>19/09/2024</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em: <strong>23/09/2024</strong></li>
                </ul>
                <AbBotao texto="Detalhes"/>
            </div>
            <div className="secaoPedidos__containerPedido">
                <ul>
                    <li>Pedido: <strong>123456</strong></li>
                    <li>Data do pedido: <strong>19/09/2024</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em: <strong>23/09/2024</strong></li>
                </ul>
                <AbBotao texto="Detalhes"/>
            </div>
        </section>
    )
}

export default Pedidos;