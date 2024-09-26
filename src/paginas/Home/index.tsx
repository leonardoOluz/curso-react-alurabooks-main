import Banner from "../../componentes/Banner"
import LivrosDestaque from "../../componentes/LivrosDestaque"
import Newsletter from "../../componentes/Newsletter"
import TagsCategorias from "../../componentes/TagsCategorias"
import Titulo from "../../componentes/Titulo"
import Loader from "../../componentes/Loader"
import { AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { obterPublic } from "../../http"
import { ILivro } from "../../interfaces/ILivro"
import './Home.css'

const Home = () => {
    const [busca, setBusca] = useState("");
    const { data: lancamentos, isLoading: loaderLanca } = useQuery<ILivro[]>({
        queryKey: ['livros'],
        queryFn: (): Promise<ILivro[]> => obterPublic('lancamentos')
    });
    const { data: maisVendidos, isLoading: loaderMaisVendidos } = useQuery<ILivro[]>({
        queryKey: ['maisVendidos'],
        queryFn: (): Promise<ILivro[]> => obterPublic('mais-vendidos')
    });
    return (<section className="home">
        <Banner subtitulo="Encontre em nossa estante o que precisa para seu desenvolvimento!" titulo="Já sabe por onde começar?">
            <form className="buscar">
                <AbCampoTexto
                    placeholder="Qual será sua próxima leitura?"
                    value={busca}
                    onChange={setBusca}
                    darkmode={true}
                    placeholderAlign="center"
                />
            </form>
        </Banner>
        {
            !loaderLanca && !loaderMaisVendidos ? <>
                <Titulo texto="ÚLTIMOS LANÇAMENTOS" />
                <LivrosDestaque livros={lancamentos!} />
                <Titulo texto="MAIS VENDIDOS" />
                <LivrosDestaque livros={maisVendidos!} />
            </> : <Loader />
        }
        <TagsCategorias />
        <Newsletter />
    </section>)
}

export default Home