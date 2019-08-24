import React from 'react'
import { connect } from 'react-redux'

import { getForecast } from '../actions/weatherBoy'

function WeatherBoy({ data, isLoading, hasErrored, getForecast }) {

    const handleGetWeatherClick = () => {
        console.log('handleclickfired')
        getForecast(50.040156499999995, 36.3003934)
    }

    return <div>
        {isLoading ? <p>Loading...</p> : ''}
        <h1>Hi! I'm WeatherBoy!</h1>
        <p>{data}</p>
        <button type="button" onClick={handleGetWeatherClick}>
            CLICK ME TO GET WEATHER DATA!
        </button>
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