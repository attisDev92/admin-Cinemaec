import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editMovie } from '../../../redux/moviesReducer'
import EditIcon from '@mui/icons-material/Edit'
import EditOffIcon from '@mui/icons-material/EditOff'
import EditButton from '../../../components/Buttons/EditButton'
import InputText from '../../MoviesForm/components/InputText'
import { useField } from '../../../hooks/useField'
import {
  validateTwoNames,
  validatePhoneNumber,
  validateMail,
  validateMinLength,
} from '../../../utils/validationInputs'

const ContactMovie = ({ contact, movieId }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState()
  const [isEditable, setIsEditable] = useState()
  const contactName = useField('text', contact.name)
  const contactRole = useField('text', contact.role)
  const contactPhone = useField('tel', contact.phone)
  const contactMail = useField('email', contact.mail)

  const handleEdit = () => {
    setLoading(true)
    const movieToUpdate = {
      contact: {
        name: contactName.value,
        role: contactRole.value,
        phone: contactPhone.value,
        mail: contactMail.value,
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
        <h5>Contacto</h5>
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
          <InputText
            name='contact-name'
            label='Nombre de Contacto'
            fullWidth={true}
            inputProps={contactName.input}
            validate={validateTwoNames}
          />
          <InputText
            name='contact-role'
            label='Cargo del Contacto'
            fullWidth={true}
            inputProps={{ ...contactRole.input, mincharts: 1 }}
            validate={validateMinLength}
          />
          <InputText
            id='contact-phone'
            label='Teléfono de contacto'
            fullWidth={true}
            inputProps={contactPhone.input}
            validate={validatePhoneNumber}
          />
          <InputText
            id='contact-mail'
            label='Email de contacto'
            fullWidth={true}
            inputProps={contactMail.input}
            validate={validateMail}
          />

          <EditButton loading={loading} handleClick={handleEdit} />
        </>
      ) : (
        <>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Cargo</TableCell>
                <TableCell>Teléfono</TableCell>
                <TableCell>Mail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contact ? (
                <TableRow>
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.role}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{contact.mail}</TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell>No se registra ningun contacto.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </>
      )}
    </>
  )
}

export default ContactMovie
