import { useState } from 'react'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { editMovie } from '../../../redux/moviesReducer'
import { Button } from '@mui/material'
import { useField } from '../../../hooks/useField'
import EditIcon from '@mui/icons-material/Edit'
import EditOffIcon from '@mui/icons-material/EditOff'
import SelectInputForm from '../../MoviesForm/components/SelectInputForm'
import DateInput from '../../MoviesForm/components/DateInput'
import SelectMultipleChoice from '../../MoviesForm/components/SelectMultipleChoice'
import EditButton from '../../../components/Buttons/EditButton'

const InfoRea = ({ reaInformation, movieId }) => {
  const dispatch = useDispatch()
  const [isEditable, setIsEditable] = useState(false)
  const availableRea = useField('select', reaInformation.available)
  const [expirationRea, setExpirationRea] = useState(
    dayjs(reaInformation.expiration),
  )
  const reaChannels = useField('select', reaInformation.territoryLicense)
  const [loading, setLoading] = useState(false)

  const handleEdit = () => {
    setLoading(true)
    const movieToUpdate = {
      reaInformation:
        availableRea.value === 'Sí'
          ? {
              available: true,
              expiration: expirationRea.toDate(),
              territoryLicense: reaChannels.value,
            }
          : {
              available: false,
            },
    }
    dispatch(editMovie(movieToUpdate, movieId)).then(() => {
      setLoading(false)
      setIsEditable(false)
    })
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h5>Banco de Contenidos</h5>
        {isEditable ? (
          <Button onClick={() => setIsEditable(false)}>
            <EditOffIcon />
          </Button>
        ) : (
          <Button onClick={() => setIsEditable(true)}>
            <EditIcon />
          </Button>
        )}
      </div>
      {isEditable ? (
        <>
          <SelectInputForm
            name='availableREA'
            label='disponible para REA'
            options={['Sí', 'No']}
            required={true}
            inputProps={availableRea.input}
          />
          {availableRea.value === 'Sí' && (
            <>
              <SelectMultipleChoice
                name='rea-territory'
                label='Canales de exhibición'
                items={['Nacional', 'Internacional', 'Retina Latina']}
                inputProps={reaChannels.input}
                required={true}
              />

              <DateInput
                placeholder='Expiración REA'
                setValue={setExpirationRea}
                value={expirationRea}
                disablePast={true}
              />
            </>
          )}
          <EditButton loading={loading} handleClick={handleEdit} />
        </>
      ) : (
        <>
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
            <p>
              La obra no está disponible en en el Banco de Contenidos del IFCI
            </p>
          )}
        </>
      )}
    </>
  )
}

export default InfoRea
