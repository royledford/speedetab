import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SalesChart.css'

export default class SalesChart extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {

    return (
      <div className="saleschart">
        {/* <AreaChart
          data={[
            [{ x: 1, y: 20 }, { x: 2, y: 10 }, { x: 3, y: 25 }],
            [{ x: 1, y: 10 }, { x: 2, y: 12 }, { x: 3, y: 4 }],
          ]}
        /> */}
      </div>
    )
  }
}
