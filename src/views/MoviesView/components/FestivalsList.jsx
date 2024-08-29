const FestivalsList = ({ festivals, awards, funding }) => {
  return (
    <>
      <h6>Festivales</h6>

      {festivals && festivals.length > 0 ? (
        <ul>
          {festivals.map((festival, i) => (
            <li key={i}>{festival}</li>
          ))}
        </ul>
      ) : (
        <p>No cuenta con participación en festivales </p>
      )}

      <h6>Premios y reconocimientos</h6>

      {awards && awards.length > 0 ? (
        <ul>
          {awards.map((award, i) => (
            <li key={i}>{award}</li>
          ))}
        </ul>
      ) : (
        <p>No cuenta con ningún reconocimiento </p>
      )}
      <h6>Fondos y financiamiento ganado</h6>

      {funding && funding.length > 0 ? (
        <ul>
          {awards.map((fund, i) => (
            <li key={i}>{fund}</li>
          ))}
        </ul>
      ) : (
        <p>No cuenta con ningún fondo o financiemiento</p>
      )}
    </>
  )
}

export default FestivalsList
