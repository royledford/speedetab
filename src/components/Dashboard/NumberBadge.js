import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NumberBadge.css'

export default class NumberBadge extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    label: PropTypes.string,
  }
  static defaultProps = {
    text: '0',
  }

  render() {
    const { text, label } = this.props
    return (
      <div className="numberbadge-wrap">
        <div className="numberbadge-num">{text}</div>
        <div className="numberbadge-label">{label}</div>
      </div>
    )
  }
}
