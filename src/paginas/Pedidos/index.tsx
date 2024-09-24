import { AbBotao } from "ds-alurabooks";
import "./Pedidos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import useObterToken from "../../hooks/useObterToken";
import { IPedido } from "../../interfaces/IPedido";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState<IPedido[]>([]);
  const token = useObterToken();
  const formatador = Intl.NumberFormat('pt-br', {
    style: "currency",
    currency: "BRL"
  })

  useEffect(() => {
    axios.get<IPedido[]>('http://localhost:8000/pedidos', {
      headers: {
        "Authorization": `Bearer ${token()}`
      }
    })
      .then(resp => setPedidos(resp.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <section className="secaoPedidos">
      <h1 className="secaoPedidos-titulo">Pedidos</h1>
      {pedidos.map(pedido => (
        <div className="secaoPedidos__containerPedido" key={pedido.id}>
          <ul>
            <li>Pedido: <strong>{pedido.id}</strong></li>
            <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
            <li>Valor total: <strong>{formatador.format(pedido.total)}
            </strong></li>
            <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
          </ul>
          <AbBotao texto="Detalhes" />
        </div>
      ))}
    </section>
  )
}

export default Pedidos;