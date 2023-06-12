import { RoutesMain } from './routes/RoutesMain'
import { api } from './services/api'
import { useEffect } from 'react'

import { GlobalStyle } from './styles/globalStyle'
import { GlobalReset } from './styles/globalReset'

function App() {

  useEffect (() => {
    async function loadData () {
      try {
        const response = await api.get('/users')
        console.log(response.data)
      } catch(error) {
        console.log(error)
      }
    }
    loadData()
  }, [])

  return (
    <>
      <GlobalStyle />
      <GlobalReset />
      <RoutesMain />
    </>
  )
}

export default App
