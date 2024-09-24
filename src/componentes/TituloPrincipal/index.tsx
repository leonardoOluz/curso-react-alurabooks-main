import "./TituloPrincipal.css"

interface PropsTituloPrincipal {
  texto: string;
}

const TituloPrincipal = ({ texto }: PropsTituloPrincipal) => {
  return (
    <div className="tituloPrincipal">
      <h2>{texto}</h2>
    </div>
  )
};

export default TituloPrincipal;