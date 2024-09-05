import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { green } from '@mui/material/colors'
import Fab from '@mui/material/Fab'
import CheckIcon from '@mui/icons-material/Check'
import SaveIcon from '@mui/icons-material/Save'

const UploadButton = ({ loading, success, handleClick, type }) => {
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  }

  return (
    <Box sx={{ m: 1, position: 'relative' }}>
      <Fab
        aria-label='save'
        color='primary'
        sx={buttonSx}
        type={type}
        onClick={handleClick}
      >
        {success ? <CheckIcon /> : <SaveIcon />}
      </Fab>
      {loading && (
        <CircularProgress
          size={68}
          sx={{
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  )
}

export default UploadButton
