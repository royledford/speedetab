import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import TransactionRow from './TransactionRow'
import moment from 'moment'
import numbro from 'numbro'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import './TransactionTable.css'

export default class Transactions extends Component {
  static propTypes = {
    transactions: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      formOpen: false,
    }
  }

  handleClose = () => {
    this.setState({ formOpen: false })
  }

  handleCellClick = (row, column, event) => {
    const tran = this.props.transactions.items[row]

    this.setState({
      formOpen: true,
      date: moment(tran.orderDateTime).format('lll'),
      customer: tran.customerName,
      sale: numbro(tran.totalAmount - tran.taxAmount).formatCurrency('0[.]00'),
      tax: numbro(tran.taxAmount).formatCurrency('0[.]00'),
      total: numbro(tran.totalAmount).formatCurrency('0[.]00'),
    })
  }

  render() {
    const { transactions } = this.props
    const { date, customer, sale, tax, total } = this.state

    const actions = [<FlatButton label="Cancel" primary={true} keyboardFocused={false} onClick={this.handleClose} />]

    return (
      <div>
        <Table multiSelectable={false} onCellClick={this.handleCellClick}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Customer</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
              <TableHeaderColumn>Tax</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={false}>
            {transactions.items.map(t => {
              return (
                <TransactionRow
                  id={t.id}
                  key={t.id}
                  date={moment(t.orderDateTime).format('lll')}
                  name={t.customerName}
                  amount={numbro(t.totalAmount).formatCurrency('0[.]00')}
                  tax={numbro(t.taxAmount).formatCurrency('0[.]00')}
                />
              )
            })}
          </TableBody>
        </Table>

        <Dialog
          title="Sales Transaction"
          actions={actions}
          modal={false}
          open={this.state.formOpen}
          onRequestClose={this.handleClose}
        >
          <table>
            <tr>
              <td className="table-cell">
                <b>Date:</b>
              </td>
              <td className="table-cell"> {date}</td>
            </tr>
            <tr>
              <td className="table-cell">
                <b>Customer:</b>
              </td>
              <td className="table-cell"> {customer}</td>
            </tr>
            <tr>
              <td className="table-cell">
                <b>Sale:</b>
              </td>
              <td className="table-cell"> {sale}</td>
            </tr>
            <tr>
              <td className="table-cell">
                <b>Tax:</b>
              </td>
              <td className="table-cell"> {tax}</td>
            </tr>
            <tr>
              <td className="table-cell">
                <b>Total:</b>
              </td>
              <td className="table-cell"> {total}</td>
            </tr>
          </table>
        </Dialog>
      </div>
    )
  }
}
