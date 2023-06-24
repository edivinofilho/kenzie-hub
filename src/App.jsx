import { useContext } from 'react'
import { UserContext } from './providers/UserContext'
import { RoutesMain } from './routes/RoutesMain'

import { GlobalReset } from './styles/globalReset'
import { GlobalStyle } from './styles/globalStyle'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const { loading } = useContext(UserContext)

  return (
    <>
      {loading ? <p>Loading Page...</p> : <RoutesMain />}
      <GlobalReset />
      <GlobalStyle />
      <ToastContainer theme="dark"></ToastContainer>
    </>
  )
}

export default App