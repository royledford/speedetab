import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import VenueCardSmall from './VenueCardSmall'

let SelectableList = makeSelectable(List)

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    }

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      })
    }

    handleRequestChange = (event, index) => {
      console.log(index)
      this.setState({
        selectedIndex: index,
      })
    }

    render() {
      return (
        <ComposedComponent value={this.state.selectedIndex} onChange={this.handleRequestChange}>
          {this.props.children}
        </ComposedComponent>
      )
    }
  }
}

SelectableList = wrapState(SelectableList)

const VenueListSmall = ({ venueList }) => (
  <SelectableList defaultValue={2}>
    {venueList.map(venue => {
      return <VenueCardSmall key={venue.id} value={venue.id} name={venue.name} location={venue.location} />
    })}
  </SelectableList>
)

export default VenueListSmall
