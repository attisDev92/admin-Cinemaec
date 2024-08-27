import dayjs from 'dayjs'

const InfoRea = ({ reaInformation }) => {
  return (
    <>
      <h6>Banco de Contenidos</h6>
      {reaInformation.available ? (
        <>
          <p>La obra es parte del Banco de Contenidos</p>
          <ul>
            <li>
              Ventanas de exhibición:
              <ul>
                {reaInformation.territoryLicense.map((territory, i) => (
                  <li key={i}>{territory}</li>
                ))}
              </ul>
            </li>
            <li>
              Expiración:{' '}
              {dayjs(reaInformation.expiration).format('DD/MM/YYYY')}
            </li>
          </ul>
        </>
      ) : (
        'La obra no está disponible en en el Banco de Contenidos del IFCI'
      )}
    </>
  )
}

export default InfoRea
