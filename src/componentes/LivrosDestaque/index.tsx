import { AbBotao, AbCard } from "ds-alurabooks"
import { useState } from "react"
import { ILivro } from "../../interfaces/ILivro"

import './LivrosDestaque.css'
import { formatador } from "../../utils/formatador-moeda"

interface LivrosDestaqueProps {
    livros: ILivro[]
}

const LivrosDestaque = ({ livros }: LivrosDestaqueProps) => {

    const [selecionado, selecionarLivro] = useState<ILivro>(livros[0])
    const valorMinimo = selecionado ? Math.min(...selecionado.opcoesCompra.map(op => op.preco)) : 0
    return (
        <section className="LivrosDestaque">
            <div>
                <ul className="livros">
                    {livros.map(livro => {
                        return (
                            <li
                                key={livro.id}
                                onClick={() => selecionarLivro(livro)}
                                className={selecionado?.titulo === livro.titulo ? 'selecionado' : ''}
                            >
                                <img src={livro.imagemCapa} alt={`Capa do livro ${livro.slug} escrito por ${livro.autor}`} />
                            </li>)
                    })}
                </ul>
            </div>
            <AbCard>
                <div className="selecionado-detalhes">
                    <header>
                        <h5>Sobre o livro:</h5>
                    </header>
                    <h6>{selecionado.titulo}</h6>
                    <p>{selecionado.descricao}</p>
                    <p>Por: {selecionado.autor}</p>
                    <footer>
                        <div className="preco">
                            <em>A partir de:</em>
                            <strong>{formatador.format(valorMinimo)}</strong>
                        </div>
                        <div>
                            <AbBotao texto="Comprar" />
                        </div>
                    </footer>
                </div>
            </AbCard>
        </section>
    )

}

export default LivrosDestaque