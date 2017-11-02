import React, { Component } from 'react'
import Header from '../Header/Header'
import DateSelect from './DateSelect'
import DashTotals from './DashTotals'
import moment from 'moment'
import Venues from '../../api/mockVenueApi'
import Transactions from '../../api/mockVenueTransactionsApi'
import DashTabs from './DashTabs'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateRange: 'thisWeek',
      fromDate: {},
      toDate: {},
      disableDates: true,
      client: {},
      venues: [],
      transactions: {},
    }
  }

  componentWillMount() {
    // Set the date pickers to the start and end of the current week.
    const fromDate = moment()
      .startOf('isoWeek')
      .toDate()
    const toDate = moment().toDate()

    this.setState({
      fromDate: fromDate,
      toDate: toDate,
      venues: Venues.getClientVenues(1),
      transactions: Transactions.getVenueTransactionsByDate(1, fromDate, toDate),
    })
  }

  // Set the date pickers to the dates in the range
  // selected in the dropdown
  handleDateRangeChange = value => {
    let to = {}
    let from = {}

    switch (value) {
      case 'thisWeek':
        from = moment()
          .startOf('isoWeek')
          .toDate()
        to = moment().toDate()
        break
      case 'LastWeek':
        from = moment()
          .subtract(1, 'weeks')
          .startOf('isoWeek')
          .toDate()
        to = moment()
          .subtract(1, 'weeks')
          .endOf('isoWeek')
          .toDate()
        break
      case 'thisMonth':
        from = moment()
          .startOf('month')
          .toDate()
        to = moment()
          .endOf('month')
          .toDate()
        break
      case 'thisQuarter':
        from = moment()
          .startOf('quarter')
          .toDate()
        to = moment()
          .endOf('quarter')
          .toDate()
        break
      case 'ytd':
        from = moment()
          .startOf('year')
          .toDate()
        to = moment().toDate()
        break
      case 'custom':
        from = this.state.fromDate
        to = this.state.toDate
        break
      default:
        from = moment()
          .startOf('isoWeek')
          .toDate()
        to = moment().toDate()
    }

    this.setState({
      fromDate: from,
      toDate: to,
      dateRange: value,
    })

    if (value === 'custom') {
      this.setState({ disableDates: false })
    } else {
      this.setState({ disableDates: true })
    }

    this.updateTransactions(from, to)
  }

  handleFromDateChange = date => {
    this.setState({ fromDate: date })
    this.updateTransactions(date, this.state.toDate)
  }

  handleToDateChange = date => {
    this.setState({ toDate: date })
    this.updateTransactions(this.state.fromDate, date)
  }

  updateTransactions = (from, to) => {
    this.setState({
      transactions: Transactions.getVenueTransactionsByDate(1, from, to),
    })
  }

  render() {
    const { dateRange, fromDate, toDate, disableDates, transactions, venues } = this.state

    return (
      <div>
        <Header />

        <div>
          <DateSelect
            range={dateRange}
            onRangeChange={this.handleDateRangeChange}
            fromDate={fromDate}
            toDate={toDate}
            disableDates={disableDates}
            fromDateChange={this.handleFromDateChange}
            toDateChange={this.handleToDateChange}
          />
        </div>

        <DashTotals
          totalSales={transactions.totalAmount}
          totalTax={transactions.taxAmount}
          totalOrders={transactions.totalTransactions}
        />

        <DashTabs venues={venues} transactions={transactions} />
      </div>
    )
  }
}
