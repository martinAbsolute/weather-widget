import React from 'react'
import WeatherBoy from './components/WeatherBoy'

//Material-UI
import CssBaseline from '@material-ui/core/CssBaseline';

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return <Provider store={store}>
    <CssBaseline />
    <WeatherBoy />
  </Provider>
}

export default App