const CHANGE_LOAN_AMOUNT = 'CHANGE_LOAN_AMOUNT';
const initialState = { loanAmount: 0 };

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
