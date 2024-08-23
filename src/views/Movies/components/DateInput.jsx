import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers'

const DateInput = ({
  placeholder,
  disablePast,
  disableFuture,
  setValue,
  value,
}) => {
  const handleDate = newDate => {
    setValue(newDate)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label={placeholder}
          variant='standard'
          onChange={handleDate}
          value={value}
          disablePast={disablePast || false}
          disableFuture={disableFuture || false}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default DateInput
