import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Material-UI
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

import { getForecast } from '../actions/weatherBoy'

function WeatherBoy({ forecastData, isLoading, hasErrored, getForecast }) {

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

    const data = {}
    if (forecastData.main !== undefined && forecastData.weather !== undefined) {
        data.temp = forecastData.main.temp.toString() + '°C'
        data.name = forecastData.name
        data.desc = forecastData.weather[0].main
    }

    return <Grid container
        style={{ backgroundColor: "#212121", height: "100vh" }}
        direction="row"
        justify="center"
        alignItems="center">
        <Card>
            <CardContent>
                <Typography variant="h4" color="textPrimary" gutterBottom>
                    Hi! I'm WeatherBoy!
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Location: {data.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Weather: {data.desc}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Temperature: {data.temp}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="secondary" onClick={handleClick}>Geolocate Weather</Button>
                {isLoading && <CircularProgress color="secondary" size="2rem" />}
                {hasErrored && <p>Error getting data.</p>}
            </CardActions>
        </Card>
    </Grid>
}

WeatherBoy.propTypes = {
    forecastData: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    getForecast: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    forecastData: state.weatherBoy.forecastData,
    isLoading: state.weatherBoy.isLoading,
    hasErrored: state.weatherBoy.hasErrored,
})

const mapDispatchToProps = dispatch => ({
    getForecast: (lat, lon) => dispatch(getForecast(lat, lon)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBoy)