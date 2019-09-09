const LOAD_TEST = 'LOAD_TEST';
const initialState = { amount: 20 };

export const actionCreators = {
  //requestWeatherForecasts: startDateIndex => async (dispatch, getState) => {    
  //  if (startDateIndex === getState().weatherForecasts.startDateIndex) {
  //    // Don't issue a duplicate request (we already have or are loading the requested data)
  //    return;
  //  }

    //dispatch({ type: requestWeatherForecastsType, startDateIndex });

    //const url = `api/SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`;
    //const response = await fetch(url);
    //const forecasts = await response.json();

    //dispatch({ type: receiveWeatherForecastsType, startDateIndex, forecasts });
  ChangeAmount: startDateIndex => async (dispatch, getState) => {   
       if (startDateIndex === getState().weatherForecasts.startDateIndex) {
      return;
    }
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === LOAD_TEST) {
    return { ...state, amount: state.amount };
  }

  return state;
};
