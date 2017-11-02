import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import TransactionRow from './TransactionRow'
import moment from 'moment'
import numbro from 'numbro'

export default class Transactions extends Component {

  static propTypes = {
    transactions: PropTypes.object.isRequired,
  }

  render() {
    const { transactions } = this.props
    return (
      <Table selectable={false} multiSelectable={false}>
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
    )
  }
}
