import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'material-ui/Tabs'
import { grey100, grey900 } from 'material-ui/styles/colors'
import { List } from 'material-ui/List'
import VenueCardSmall from '../Venue/VenueCardSmall'
import TransactionTable from '../Transactions/TransactionTable'

export default class DashTabs extends Component {
  static propTypes = {
    venues: PropTypes.array.isRequired,
    transactions: PropTypes.object.isRequired,
  }

  render() {
    const { venues, transactions } = this.props

    return (
      <Tabs>
        <Tab label="Venues" buttonStyle={{ backgroundColor: grey100, color: grey900 }}>
          <List>
            {venues.map(venue => {
              return <VenueCardSmall key={venue.id} id={venue.id} name={venue.name} location={venue.location} />
            })}
          </List>
        </Tab>

        <Tab label="Transactions" buttonStyle={{ backgroundColor: grey100, color: grey900 }}>
          <TransactionTable transactions={transactions} />
        </Tab>

        <Tab label="Menu" buttonStyle={{ backgroundColor: grey100, color: grey900 }}>
          <h4>Menu List</h4>
        </Tab>

        <Tab label="Reports" buttonStyle={{ backgroundColor: grey100, color: grey900 }}>
          <h4>Reports List</h4>
        </Tab>
      </Tabs>
    )
  }
}
