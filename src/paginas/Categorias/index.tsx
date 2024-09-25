import { useParams } from "react-router-dom";
import TituloPrincipal from "../../componentes/TituloPrincipal"
import { obterCategoriaPorSlug } from "../../http";
import Loader from "../../componentes/Loader";
import { useQuery } from "@tanstack/react-query";
import { ICategaria } from "../../interfaces/ICategaria";

const Categoria = () => {
  const params = useParams()

  const { data: categoria, isLoading } = useQuery<ICategaria>({
    queryKey: ['categoriaPorSlug', params.slug],
    queryFn: () => obterCategoriaPorSlug(params.slug || '')
  })


  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (<section>
    <TituloPrincipal texto={categoria?.nome ?? ""} />
  </section>
  )
}

export default Categoria;