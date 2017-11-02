// import delay from './delay'
import {transactionData} from './transactions'
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.


class TransactionApi {
  static getVenueTransactions(venueId) {
    // const filtered = transactionData.filter(transaction => transaction.venueId === venueId)
    // if (filtered.length > 0) {
    //   return filtered[0]
    // } else {
    //   return []
    // }
    return transactionData
  }

  static getVenueTransactionsByDate(venueId, fromDate, toDate) {
    let venueTransactions = this.getVenueTransactions(venueId)
    // clone the object so we aren't working with a reference.
    venueTransactions = Object.assign({}, venueTransactions)
    const from = Date.parse(fromDate)
    const to = Date.parse(toDate)

    const items = venueTransactions.items
    const byDate = items.filter((t, i) => Date.parse(t.orderDateTime) >= from && Date.parse(t.orderDateTime) <= to)

    // sum the amounts
    let sumTotal = 0
    let sumTax = 0
    let numItems = 0

    if (byDate.length > 1) {
      sumTotal = byDate.reduce((a, b) => ({ totalAmount: a.totalAmount + b.totalAmount })).totalAmount
      sumTax = byDate.reduce((a, b) => ({ taxAmount: a.taxAmount + b.taxAmount })).taxAmount
      numItems = byDate.length
    } else if (byDate.length === 1) {
      sumTotal = byDate[0].totalAmount
      sumTax = byDate[0].taxAmount
      numItems = 1
    } else {
      sumTotal = 0
      sumTax = 0
      numItems = 0
    }
    venueTransactions.totalAmount = sumTotal
    venueTransactions.taxAmount = sumTax
    venueTransactions.totalTransactions = numItems

    venueTransactions.items = byDate
    return venueTransactions
  }
}

// class TransactionApi {
//   static getClientTransactions(venueId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(transactions.filter(transaction => transaction.venueId === venueId))
//       }, delay)
//     })
//   }
// }

export default TransactionApi
