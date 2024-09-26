import { useQuery } from "@tanstack/react-query";
import { ICategaria } from "../../interfaces/ICategaria";
import "./ListaLivros.css"
import { obterProdutosPorCategoria } from "../../http";
import CardLivro from "../CardLivro";
import Loader from "../Loader";

interface ListaLivrosProps {
  categoria: ICategaria
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {

  const { data: produtos, isLoading } = useQuery({
    queryKey: ['buscalivrosPorCategoria', categoria],
    queryFn: () => obterProdutosPorCategoria(categoria)
  })

  if (isLoading) {
    return (<Loader />)
  }

  return (<section className="livros">
    {produtos?.map(livro => <CardLivro key={livro.id} livro={livro} />)}
  </section>)
}

export default ListaLivros;