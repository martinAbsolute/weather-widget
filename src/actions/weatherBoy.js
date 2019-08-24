import {
    GET_FORECAST_STARTED,
    GET_FORECAST_SUCCESS,
    GET_FORECAST_FAILURE,
} from '.'

import { OPENWEATHER_APIKEY } from '../config'

import axios from 'axios'

export const getForecast = ({ lat, lon }) => {
    return dispatch => {
        dispatch(getForecastStarted())
        axios
            .get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${OPENWEATHER_APIKEY}`)
            .then(res => {
                dispatch(getForecastSuccess(res.data))
            })
            .catch(err => {
                dispatch(getForecastFailure(err.message))
            })
    }
}

const getForecastStarted = () => ({
    type: GET_FORECAST_STARTED
})

const getForecastSuccess = data => ({
    type: GET_FORECAST_SUCCESS,
    payload: {
        ...data
    }
})

const getForecastFailure = error => ({
    type: GET_FORECAST_FAILURE,
    payload: {
        error
    }
})