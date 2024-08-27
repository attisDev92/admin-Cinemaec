import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const Channels = ({ channels }) => {
  return (
    <>
      <h6>Canales</h6>
      <Table aria-label='simple table'>
        {channels && channels.length > 0 ? (
          <>
            <TableHead>
              <TableRow>
                <TableCell>Plataforma</TableCell>
                <TableCell>Enlace</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {channels.map((channel, i) => (
                <TableRow key={i}>
                  <TableCell>{channel.plataform}</TableCell>
                  <TableCell>
                    <a href={`http://${channel.url}`} target='_blank'>
                      Link
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell>No se registra ninguna plataforma.</TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </>
  )
}

export default Channels
