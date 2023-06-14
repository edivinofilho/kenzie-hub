import { RoutesMain } from './routes/RoutesMain'

import { GlobalReset } from './styles/globalReset'
import { GlobalStyle } from './styles/globalStyle'

const App = () => {
  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      <RoutesMain />
    </>
  )
}

export default App
