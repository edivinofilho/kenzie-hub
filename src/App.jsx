import { UserProvider } from './providers/UserContext'
import { TechProvider } from './providers/TechContext'
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

      <UserProvider>
        <TechProvider>
          <RoutesMain />
        </TechProvider>
      </UserProvider>
      
      <ToastContainer theme="dark"></ToastContainer>
    </>
  )
}

export default App