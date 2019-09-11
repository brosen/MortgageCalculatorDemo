// import { axiosGet } from './HttpUtility';

const CHANGE_LOAN_AMOUNT = 'CHANGE_LOAN_AMOUNT';
export const API_ENDPOINT = 'api/SampleData/';
const initialState = { loanAmount: 0 };

/*
    const url = API_ENDPOINT + 'summary';
    const response = await axiosGet(url);
    // const forecasts = await response.json();

 */

export const actionCreators = {
  changeLoanAmount: amount => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_LOAN_AMOUNT,
      amount: amount
    });
  }
};


export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === CHANGE_LOAN_AMOUNT) {
    return { ...state, loanAmount: action.amount };
  }

  return state;
};
