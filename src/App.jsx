import { RoutesMain } from './routes/RoutesMain'

import { GlobalStyle } from './styles/globalStyle'
import { GlobalReset } from './styles/globalReset'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalReset />
      <RoutesMain />
    </>
  )
}

export default App
