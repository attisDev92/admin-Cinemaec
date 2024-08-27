import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const ContactMovie = ({ contact }) => {
  return (
    <>
      <h6>Contacto</h6>
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
  )
}

export default ContactMovie
