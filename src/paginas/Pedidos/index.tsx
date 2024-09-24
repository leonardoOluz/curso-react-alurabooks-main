import { AbBotao } from "ds-alurabooks";
import { useEffect, useState } from "react";
import { IPedido } from "../../interfaces/IPedido";
import http from "../../http";
import "./Pedidos.css";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState<IPedido[]>([]);
  const formatador = Intl.NumberFormat('pt-br', {
    style: "currency",
    currency: "BRL"
  })

  const aoDeletar = (id: number) => {
    http.delete(`/pedidos/${id}`)
      .then(() => {
        setPedidos(pedidos.filter(pedido => pedido.id !== id))
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    http.get<IPedido[]>('/pedidos')
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
            <li>Excluir pedido:
              <button
                className="deletar-pedido"
                onClick={() => aoDeletar(pedido.id)}
              >X</button>
            </li>
          </ul>
          <AbBotao texto="Detalhes" />
        </div>
      ))}
    </section>
  )
}

export default Pedidos;