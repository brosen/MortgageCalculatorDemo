// import { axiosGet } from './HttpUtility';
import moment from 'moment';

const CHANGE_CLOSING_DATE = 'CHANGE_CLOSING_DATE';

export const API_ENDPOINT = 'api/SampleData/';

const initialState = {
  closingDate: moment("1/1/2019", "D MM YYYY")
};

/*
    const url = API_ENDPOINT + 'summary';
    const response = await axiosGet(url);
    // const forecasts = await response.json();

 */

export const actionCreators = {
  closingDateChange: closingDate => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_CLOSING_DATE,
      closingDate: closingDate
    });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === CHANGE_CLOSING_DATE) {
    return { ...state, closingDate: action.closingDate };
  }

  return state;
};
