import "./TituloPrincipal.css"

interface PropsTituloPrincipal {
  texto: string;
}

const TituloPrincipal = ({ texto }: PropsTituloPrincipal) => {
  return (
      <h2 className="tituloPrincipal">{texto}</h2>
  )
};

export default TituloPrincipal;