import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TableRow, TableRowColumn } from 'material-ui/Table'


export default class TransactionRow extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    tax: PropTypes.string.isRequired,
  }

  render() {
    const { id, date, name, amount, tax } = this.props
    return (
      <TableRow>
        <TableRowColumn>{id} </TableRowColumn>
        <TableRowColumn>{date}</TableRowColumn>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{amount}</TableRowColumn>
        <TableRowColumn>{tax}</TableRowColumn>
      </TableRow>
    )
  }
}
