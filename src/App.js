import React from 'react'
import WeatherBoy from './components/WeatherBoy'
import './App.css'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return <Provider store={store}>
    <WeatherBoy />
  </Provider>
}

export default App