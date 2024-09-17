import "./Card.css"
const Card = (props) => {
    return(
        <div className="card">
            <h1>{props.titulo}</h1>
            <h2>{props.descripcion}</h2>
            <h3>{props.personaAsignada}</h3>
            <h3>{props.fechaInicio}</h3>
            <h3>{props.fechaFin}</h3>
        </div>
    )
}

export default Card;