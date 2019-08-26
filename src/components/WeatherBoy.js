import React from 'react'
import { connect } from 'react-redux'

import { getForecast } from '../actions/weatherBoy'

function WeatherBoy({ data, isLoading, hasErrored, getForecast }) {

    const handleClick = () => {
        if (navigator.geolocation) {
            try {
                navigator.geolocation.getCurrentPosition(pos => {
                    getForecast(pos.coords.latitude, pos.coords.longitude);
                });
            }
            catch (err) {
                console.log(err)
            }
        } else {
            console.log('The browser doesn\'t support geolocation.')
        }
    }

    return <div>
        {isLoading && <p>Loading...</p>}
        {hasErrored && <p>Error getting data.</p>}
        <h1>Hi! I'm WeatherBoy!</h1>
        <p>You are currently in - {data.name}</p>
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