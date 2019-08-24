import { GET_FORECAST_STARTED, GET_FORECAST_SUCCESS, GET_FORECAST_FAILURE } from '../actions'

const initialState = {
    forecastData: [],
    isLoading: false,
    hasErrored: false,
    errorData: '',
}

export default function weatherBoy(state = initialState, action) {
    switch (action.type) {
        case GET_FORECAST_STARTED:
            return {
                ...state,
                isLoading: true,
                hasErrored: false,
            }
        case GET_FORECAST_SUCCESS:
            return {
                ...state,
                forecastData: action.payload,
                isLoading: false,
            }
        case GET_FORECAST_FAILURE:
            return {
                ...state,
                hasErrored: true,
                errorData: action.payload,
            }
        default:
            return state
    }
}