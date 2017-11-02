import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import './DateSelect.css'

export default class DateSelect extends Component {
  static propTypes = {
    range: PropTypes.string.isRequired,
    fromDate: PropTypes.object.isRequired,
    toDate: PropTypes.object.isRequired,
    datesEnabled: PropTypes.bool,
  }

  static defaultProps = {
    someProp: 'someValue',
  }

  handleFromChange = (event, date) => {
    this.props.fromDateChange(date)
  }

  handleToChange = (event, date) => {
    this.props.toDateChange(date)
  }

  render() {
    const { range, disableDates, toDate, fromDate, onRangeChange } = this.props

    // Add a class when dates should be disabled (dropdown != 'custom')
    const disableDateLabel = disableDates ? 'dateselect-disable' : ''

    return (
      <div className="dateselect-wrap">
        <SelectField
          floatingLabelText="Dates"
          value={range}
          onChange={(event, index, value) => onRangeChange(value)}
          style={{ display: 'inline-block', width: 150 }}
        >
          <MenuItem value={'thisWeek'} primaryText="This week" />
          <MenuItem value={'LastWeek'} primaryText="Last week" />
          <MenuItem value={'thisMonth'} primaryText="This month" />
          <MenuItem value={'thisQuarter'} primaryText="This quarter" />
          <MenuItem value={'ytd'} primaryText="Year to date" />
        </SelectField>

        <p className={`dateselect-labels ${disableDateLabel}`}>From</p>
        <DatePicker
          id="datepaicker-from"
          disabled={disableDates}
          value={fromDate}
          autoOk={true}
          style={{ display: 'inline-block', margin: '21px 0 0 20px' }}
          onChange={this.handleFromChange}
        />

        <p className={`dateselect-labels ${disableDateLabel}`}>To</p>
        <DatePicker
          id="datepaicker-to"
          disabled={disableDates}
          value={toDate}
          autoOk={true}
          style={{ display: 'inline-block', margin: '21px 0 0 20px' }}
          onChange={this.handleToChange}
        />
      </div>
    )
  }
}
