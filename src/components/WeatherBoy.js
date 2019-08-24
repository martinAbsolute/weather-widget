import React from 'react'
import { connect } from 'react-redux'

import { getForecast } from '../actions/weatherBoy'

function WeatherBoy() {
    return <h1>Hi! I'm WeatherBoy!</h1>
}

const mapStateToProps = state => ({
    data: state.weatherBoy.forecastData,
    isLoading: state.weatherBoy.isLoading,
    hasErrored: state.weatherBoy.hasErrored,
})

const mapDispatchToProps = dispatch => ({
    getForecast: (lat, lon) => dispatch(getForecast(lat, lon))
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBoy)