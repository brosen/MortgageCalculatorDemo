import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { actionCreators } from '../store/Global';

import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';


import moment from 'moment';


let items = [];

export class Global extends Component {
  constructor(props) {
    super(props);

    [
      'onClosingDateChange',
      'onChangeTotalCommitment',
      'Accrual'
    ].forEach(func => {
      this[func] = this[func].bind(this);
    });
  }

  onClosingDateChange(e) {
    try {
      let dt = moment(e);
      this.props.closingDateChange(dt);
    }
    catch (error) {
      console.log("onClosingDateChange");
    }
  }

  onChangeTotalCommitment(e) {
    this.props.changeTotalCommitment(e.target.value);
  }

  Accrual(lines, startDate) {
    items = [];
    console.log(startDate);
    items.push(
      <tr key={0}>
        <td>Intrest Accrual Date</td>
        <td>{startDate.format("D MM YYYY")}</td>
      </tr>
    );
    let cl = startDate.clone();
    for (let i = 0; i < lines - 1; i++) {
      items.push(
        <tr key={i + 1}>
          <td>Intrest Accrual Date</td>
          <td>{startDate.add(1, 'd').format("D MM YYYY")}</td>
        </tr>
      );
    }
  }
  
  //<!-- <input type="text" value={this.props.global.closingDate} onChange={this.onClosingDateChange} /> -->
  render() {
    let dt = this.props.global.closingDate;
    this.Accrual(this.props.global.totalCommitment, dt);
    console.log(this.props.global.closingDate.format("D-MM YYYY"))
    return (
      <div className="container">
        <h1>Global</h1>
        <Table striped bordered>
          <tbody>
            <tr>
              <td>Closing Date</td>
              <td>
                <DayPicker onDayClick={this.onClosingDateChange} />
              </td>
            </tr>
            <tr>
              <td>Funding Date</td>
              <td>{moment(this.props.global.closingDate).format("D/MM/YYYY")}</td>
            </tr>
            <tr>
              <td>Total Commitment</td>
              <td><input type="text" value={this.props.global.totalCommitment} onChange={this.onChangeTotalCommitment} /></td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered>
          <tbody>
            {items}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Global);
