import { CotizadorProvider } from './context/CotizadorProvider'
import { AppSeguro } from './components/AppSeguto'

function App () {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
