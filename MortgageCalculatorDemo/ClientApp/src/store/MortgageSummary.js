// import { axiosGet } from './HttpUtility';

const CHANGE_LOAN_AMOUNT = 'CHANGE_LOAN_AMOUNT';
const CHANGE_INTREST_RATE = 'CHANGE_INTREST_RATE';
const CHANGE_LIFE_OF_LOAN = 'CHANGE_LIFE_OF_LOAN';
const CHANGE_PAYMENTS_PER_YEAR = 'CHANGE_PAYMENTS_PER_YEAR';

export const API_ENDPOINT = 'api/SampleData/';

const initialState = {
  loanAmount: 0,
  intrestRate: 0,
  lifeOfLoan: 0,
  paymentsPerYear: 0
};

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
  },
  changeIntrestRate: rate => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_INTREST_RATE,
      rate: rate
    });
  },
  changeLifeOfLoan: lifeOfLoan => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_LIFE_OF_LOAN,
      lifeOfLoan: lifeOfLoan
    });
  }
  ,
  changePaymentsPerYear: paymentsPerYear => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_PAYMENTS_PER_YEAR,
      paymentsPerYear: paymentsPerYear
    });
  }

};



export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === CHANGE_LOAN_AMOUNT) {
    return { ...state, loanAmount: action.amount };
  }

  if (action.type === CHANGE_INTREST_RATE) {
    return { ...state, intrestRate: action.rate };
  }

  if (action.type === CHANGE_LIFE_OF_LOAN) {
    return { ...state, lifeOfLoan: action.lifeOfLoan };
  }

  if (action.type === CHANGE_PAYMENTS_PER_YEAR) {
    return { ...state, paymentsPerYear: action.paymentsPerYear };
  }

  return state;
};
