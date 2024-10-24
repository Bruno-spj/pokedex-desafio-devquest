
import { AppRoutes } from './pages/routes/index'
import { GlobalStyle } from './styles/globalStyle'

import { CustomThemeProvider } from './context/index'


function App() {
  
  return (
    <>
    <CustomThemeProvider>
          <AppRoutes />
          <GlobalStyle />
    </CustomThemeProvider>
     
        
     
    </>
  )
}

export default App
