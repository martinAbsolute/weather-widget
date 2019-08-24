import React from 'react'
import { connect } from 'react-redux'

import { getForecast } from '../actions/weatherBoy'

function WeatherBoy({ data, isLoading, hasErrored, getForecast }) {

    const handleClick = () => {
        getForecast(50.040156499999995, 36.3003934)
    }

    return <div>
        {isLoading ? <p>Loading...</p> : ''}
        {isLoading ? <p>Error getting data.</p> : ''}
        <h1>Hi! I'm WeatherBoy!</h1>
        <p>Location - {data.name}</p>
        <button type="button" onClick={handleClick}>Click to get weather data</button>
    </div>
}

const mapStateToProps = state => ({
    data: state.weatherBoy.forecastData,
    isLoading: state.weatherBoy.isLoading,
    hasErrored: state.weatherBoy.hasErrored,
})

const mapDispatchToProps = dispatch => ({
    getForecast: (lat, lon) => dispatch(getForecast(lat, lon)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBoy)