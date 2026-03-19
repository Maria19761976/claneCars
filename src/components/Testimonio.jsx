function Testimonio({ nombre, pais, imagen, cargo, empresa, testimonio }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} className="tarjeta-imagen" />
      <h3>{nombre}</h3>
      <p className="tarjeta-pais">{pais}</p>
      <p className="tarjeta-cargo">{cargo} — {empresa}</p>
      <p className="tarjeta-testimonio">"{testimonio}"</p>
    </div>
  )
}

export default Testimonio
