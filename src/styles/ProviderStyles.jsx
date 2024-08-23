import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#be3144',
    },
    secondary: {
      main: '#3a4750',
    },
  },
})

export default function ProviderStyles(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
