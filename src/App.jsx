import { RoutesMain } from './routes/RoutesMain'

import { GlobalReset } from './styles/globalReset'
import { GlobalStyle } from './styles/globalStyle'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer theme="dark"></ToastContainer>
    </>
  )
}

export default App