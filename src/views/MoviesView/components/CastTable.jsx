import { Table, TableBody, TableCell, TableRow } from '@mui/material'

const CastTable = ({ cast }) => {
  return (
    <>
      <h6>Reparto</h6>
      <Table aria-label='simple table'>
        <TableBody>
          {cast && cast.length > 0 ? (
            cast.map((member, i) => (
              <TableRow key={i}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.role}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Aún no se registran personas del elenco</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}

export default CastTable
