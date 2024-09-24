import { AbTag } from "ds-alurabooks"
import "./FooterMinhaConta.css"

const FooterMinhaConta = () => {
  return (
    <footer className="FooterMinhaConta">
        <h2 className="FooterMinhaConta-titulo">CATEGORIAS MAIS BUSCADAS</h2>
        <div className="FooterMinhaConta__container-tag">
          <AbTag texto="Android" />
          <AbTag texto="OO" />
          <AbTag texto="Marketing Digital" />
          <AbTag texto="Agile" />
          <AbTag texto="Startups" />
          <AbTag texto="HTML & CSS" />
          <AbTag texto="Java" />
          <AbTag texto="Python" />
        </div>
    </footer>
  )
}

export default FooterMinhaConta;