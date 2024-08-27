const FestivalsList = ({ festivals, awards }) => {
  return (
    <>
      <h6>Festivales</h6>
      <ul>
        {festivals && festivals.length > 0
          ? festivals.map((festival, i) => <li key={i}>{festival}</li>)
          : 'No cuenta con participación en festivales'}
      </ul>
      <h6>Premios y reconocimientos</h6>
      <ul>
        {awards && awards.length > 0
          ? awards.map((award, i) => <li key={i}>{award}</li>)
          : 'No cuenta con ningún reconocimiento'}
      </ul>
    </>
  )
}

export default FestivalsList
