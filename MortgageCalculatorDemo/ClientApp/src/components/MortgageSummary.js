import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/MortgageSummary';

export class MortgageSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
      items: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.onChangeLoanAmount = this.onChangeLoanAmount.bind(this);
    this.onChangeIntrestRate = this.onChangeIntrestRate.bind(this);
    this.onChangeLifeOfLoan = this.onChangeLifeOfLoan.bind(this);
    this.onChangePaymentsPerYear = this.onChangePaymentsPerYear.bind(this);
    this.CalculatePaymentsPerPeriod = this.CalculatePaymentsPerPeriod.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    if (isNaN(value) || value > 100) {
      this.setState({
        currentCount: 0
      });
      return;
    }
    this.setState({
      currentCount: value
    });
  }
  handleClick() {
    //let newItems = [];
    //for (var i = 0; i < this.state.currentCount; i++) {
    //  newItems.push(i + 1);
    //}
    //this.setState({
    //  items: newItems
    //});
    console.log(this.props.mortgageSummary);
  }

  onChangeLoanAmount(e) {
    this.props.changeLoanAmount(e.target.value);
  }
  onChangeIntrestRate(e) {
    this.props.changeIntrestRate(e.target.value);
  }
  onChangeLifeOfLoan(e) {
    this.props.changeLifeOfLoan(e.target.value);
  }
  onChangePaymentsPerYear(e) {
    this.props.changePaymentsPerYear(e.target.value);
  }

  render() {
    let loanAmount = this.props.mortgageSummary.loanAmount;
    let intrestRate = this.props.mortgageSummary.intrestRate;
    let lifeOfLoan = this.props.mortgageSummary.lifeOfLoan;
    let paymentsPerYear = this.props.mortgageSummary.paymentsPerYear;
    let totalPayments = lifeOfLoan * paymentsPerYear;
    let paymentsPerPeriod = this.CalculatePaymentsPerPeriod();
    return (
      <div>
        <h1>Mortgage Calculator Summary</h1>
        <div>Loan Amount <input type="text" value={loanAmount} onChange={this.onChangeLoanAmount} /></div>
        <div>Annual Intrest Rate <input type="text" value={intrestRate} onChange={this.onChangeIntrestRate} /></div>
        <div>Life loan (in years) <input type="text" value={lifeOfLoan} onChange={this.onChangeLifeOfLoan} /></div>
        <div>Number of payments per year <input type="text" value={paymentsPerYear} onChange={this.onChangePaymentsPerYear} /></div>
        <div>Total number of payments <input type="text" value={totalPayments} disabled/></div>
        <div>Payments per period <input type="text" value={paymentsPerPeriod} disabled/></div>
        <div>Sum of payments <input type="text" value={this.state.value} onChange={this.handleChange} /></div>
        <div>Intrest cost <input type="text" value={this.state.value} onChange={this.handleChange} /></div>
        <div>  <button onClick={this.handleClick}>Run</button></div>
        {this.state.items.map((row, x) => {
          return (<div>{row}</div>)
        })}
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MortgageSummary);
