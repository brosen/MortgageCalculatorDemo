// import { axiosGet } from './HttpUtility';
import moment from 'moment';

const CHANGE_CLOSING_DATE = 'CHANGE_CLOSING_DATE';
const CHANGE_TOTAL_COMMITMENT = 'CHANGE_TOTAL_COMMITMENT;'

export const API_ENDPOINT = 'api/SampleData/';

const initialState = {
  closingDate: moment("1/1/2019"), //moment("1/1/2019", "D MM YYYY"),
  totalCommitment: 3
};

/*
    const url = API_ENDPOINT + 'summary';
    const response = await axiosGet(url);
    // const forecasts = await response.json();

 */

export const actionCreators = {
  closingDateChange: closingDate => async (dispatch, getState) => {
    console.log('actionCreators ' + closingDate.format("D MM YYYY"));
    dispatch({
      type: CHANGE_CLOSING_DATE,
      closingDate: closingDate
    });
  },
  changeTotalCommitment: totalCommitment => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_TOTAL_COMMITMENT,
      totalCommitment: totalCommitment
    });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === CHANGE_CLOSING_DATE) {
    console.log('reducer ' + action.closingDate.format("D MM YYYY"));
    return { ...state, closingDate: action.closingDate };
  }
  if (action.type === CHANGE_TOTAL_COMMITMENT) {
    return { ...state, totalCommitment: action.totalCommitment };
  }

  return state;
};
