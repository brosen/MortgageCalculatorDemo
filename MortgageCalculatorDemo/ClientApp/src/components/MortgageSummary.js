import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { actionCreators } from '../store/MortgageSummary';

export class MortgageSummary extends Component {
  constructor(props) {
    super(props);

    this.onChangeLoanAmount = this.onChangeLoanAmount.bind(this);
    this.onChangeInterestRate = this.onChangeInterestRate.bind(this);
    this.onChangeLifeOfLoan = this.onChangeLifeOfLoan.bind(this);
    this.onChangePaymentsPerYear = this.onChangePaymentsPerYear.bind(this);
    this.CalculatePaymentsPerPeriod = this.CalculatePaymentsPerPeriod.bind(this);
  }

  onChangeLoanAmount(e) {
    this.props.changeLoanAmount(e.target.value);
  }
  onChangeInterestRate(e) {
    this.props.changeInterestRate(e.target.value);
  }
  onChangeLifeOfLoan(e) {
    this.props.changeLifeOfLoan(e.target.value);
  }
  onChangePaymentsPerYear(e) {
    this.props.changePaymentsPerYear(e.target.value);
  }

  FormatNumber(num) {
    return (Math.round(num * 100) / 100).toString();
  }
  CalculatePaymentsPerPeriod(loanAmount, interestRate, totalPayments, paymentsPerYear) {
    let Pv = loanAmount;
    let APR = interestRate / 100; 
    let R = APR / paymentsPerYear;
    let n = totalPayments;
    let P = (Pv * R) / (1 - Math.pow(1 + R, -n));
    return P;
  }

  render() {
    let loanAmount = this.props.mortgageSummary.loanAmount;
    let interestRate = this.props.mortgageSummary.interestRate;
    let lifeOfLoan = this.props.mortgageSummary.lifeOfLoan;
    let paymentsPerYear = this.props.mortgageSummary.paymentsPerYear;
    let totalPayments = lifeOfLoan * paymentsPerYear;
    let paymentsPerPeriod = this.CalculatePaymentsPerPeriod(loanAmount, interestRate, totalPayments, paymentsPerYear);
    let sumOfPayments = paymentsPerPeriod * totalPayments;
    let interestCost = sumOfPayments - loanAmount;
    return (
      <div className="container">
        <h1>Mortgage Calculator Summary</h1>
        <Table striped bordered>
          <tbody>
            <tr>
              <td>Loan Amount</td>
              <td><input type="text" value={loanAmount} onChange={this.onChangeLoanAmount} /></td>
            </tr>
            <tr>
              <td>Annual Interest Rate </td>
              <td><input type="text" value={interestRate} onChange={this.onChangeInterestRate} /></td>
            </tr>
            <tr>
              <td>Life loan (in years)</td>
              <td><input type="text" value={lifeOfLoan} onChange={this.onChangeLifeOfLoan} /></td>
            </tr>
            <tr>
              <td>Number of payments per year</td>
              <td><input type="text" value={paymentsPerYear} onChange={this.onChangePaymentsPerYear} /></td>
            </tr>
            <tr>
              <td>Total number of payments</td>
              <td><input type="text" value={totalPayments} disabled /></td>
            </tr>
            <tr>
              <td>Payments per period</td>
              <td><input type="text" value={this.FormatNumber(paymentsPerPeriod)} disabled /></td>
            </tr>
            <tr>
              <td>Sum of payments</td>
              <td><input type="text" value={this.FormatNumber(sumOfPayments)} disabled /></td>
            </tr>
            <tr>
              <td>Interest cost per year</td>
              <td><input type="text" value={this.FormatNumber(interestCost)} disabled /></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MortgageSummary);
