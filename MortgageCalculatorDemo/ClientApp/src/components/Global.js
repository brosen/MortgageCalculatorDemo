import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { actionCreators } from '../store/Global';
import moment from 'moment';

export class Global extends Component {
  constructor(props) {
    super(props);

    [
      'onClosingDateChange',
    ].forEach(func => {
      this[func] = this[func].bind(this);
    });
  }

  onClosingDateChange(e) {
    var date = moment(e.target.value);
    if (date.isValid()) {
      this.props.closingDateChange(e.target.value);
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Global</h1>
        <Table striped bordered>
          <tbody>
            <tr>
              <td>Closing Date</td>
              <td><input type="text" value={this.props.global.closingDate} onChange={this.onClosingDateChange} /></td>
            </tr>
            <tr>
              <td>Funding Date</td>
              <td><input type="text" value={this.props.global.closingDate} disabled /></td>
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
)(Global);
