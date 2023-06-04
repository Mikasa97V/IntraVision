import App from 'app/App'
import GlobalStyles from 'app/styled'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'redux/rootReducer'

function Root() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
      <GlobalStyles />
    </>
  )
}

export default Root
