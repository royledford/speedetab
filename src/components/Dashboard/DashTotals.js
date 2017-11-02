import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NumberBadge from './NumberBadge'
import numbro from 'numbro'
import SalesChart from '../SalesChart/SalesChart'
import './DashTotals.css'

export default class DashTotals extends Component {
  static propTypes = {
    totalSales: PropTypes.number.isRequired,
    totalOrders: PropTypes.number.isRequired,
    totalTax: PropTypes.number.isRequired,
  }

  static defaultProps = {
    totalSales: 0,
    totalOrders: 0,
    totalTax: 0,
  }

  render() {
    const { totalSales, totalTax, totalOrders } = this.props

    const sales = numbro(totalSales).format('$2a')
    const tax = numbro(totalTax).format('$0a')
    const orders = numbro(totalOrders).format('2a')
    return (
      <div className="dashtotals-numbers">
        <SalesChart />
        <NumberBadge text={sales} label="Sales" />
        <NumberBadge text={tax} label="Tax" />
        <NumberBadge text={orders} label="Orders" />
      </div>
    )
  }
}
