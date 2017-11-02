import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'

export default class name extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    imageUrl: PropTypes.string,
  }
  static defaultProps = {
    id: 0,
    title: 'My Venue Name',
    location: '2323 Pistol Lane',
    imageUrl: 'https://placeimg.com/640/480/arch',
  }

  render() {
    const { id, name, location } = this.props

    return <ListItem id={id} primaryText={name} secondaryText={location} />
  }
}
