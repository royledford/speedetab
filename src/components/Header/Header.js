import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Mood from 'material-ui/svg-icons/social/mood'
import Avatar from 'material-ui/Avatar'
import { grey700, darkBlack} from 'material-ui/styles/colors'
import './Header.css'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logged: 'false',
    }
  }

  handleLogged = () => {
    this.setState({ logged: !this.state.logged })
  }

  render() {
    return (
      <div className="header">
        <AppBar
          style={{backgroundColor: darkBlack}}
          title="Taco Group Co."
          iconElementRight={
            this.state.logged ? (
              <Logged handleLogging={this.handleLogged} />
            ) : (
              <Login handleLogging={this.handleLogged} />
            )
          }
          iconElementLeft={<Avatar icon={<Mood />} backgroundColor={grey700} />}
        />
      </div>
    )
  }
}

class Login extends Component {
  static muiName = 'FlatButton'

  render() {
    return (
      <FlatButton
        {...this.props}
        label="Login"
        onClick={this.props.handleLogging}
      />
    )
  }
}

const Logged = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Venue" />
    <MenuItem primaryText="Sign out" onClick={props.handleLogging} />
  </IconMenu>
)

Logged.muiName = 'IconMenu'
