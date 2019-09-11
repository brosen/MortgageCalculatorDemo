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
    let newItems = [];
    for (var i = 0; i < this.state.currentCount; i++) {
      newItems.push(i + 1);
    }
    this.setState({
      items: newItems
    });
  }

  onChangeLoanAmount(e) {
    this.props.changeLoanAmount(e.target.value);
  }

  render() {
    let loanAmount = this.props.mortgageSummary.loanAmount;
    return (
      <div>
        <h1>Mortgage Calculator Summary</h1>
        <div>Loan Amount <input type="text" value={loanAmount} onChange={this.onChangeLoanAmount} /></div>
        <div>Annual Intrest Rate <input type="text" value={loanAmount} onChange={this.onChangeLoanAmount} /></div>
        <div>Life loan (in years) <input type="text" value={this.state.value} onChange={this.handleChange} /></div>
        <div>Number of payments per year <input type="text" value={this.state.value} onChange={this.handleChange} /></div>
        <div>Total number of payments <input type="text" value={this.state.value} onChange={this.handleChange} /></div>
        <div>Payments per period <input type="text" value={this.state.value} onChange={this.handleChange} /></div>
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
