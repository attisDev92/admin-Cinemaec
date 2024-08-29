const CastTable = ({ cast }) => {
  return (
    <>
      <h6>Reparto</h6>

      {cast && cast.length > 0 ? (
        <ul>
          {cast.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>Aún no se registran personas del elenco</p>
      )}
    </>
  )
}

export default CastTable
