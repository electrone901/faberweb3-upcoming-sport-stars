import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import VerifiedUserSharpIcon from '@material-ui/icons/VerifiedUserSharp'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import { StylesProvider } from '@material-ui/core/styles'
import './Navbar.css'
import logo from '../../../images/icon.png'
import UAuth from '@uauth/js'

export const Navbar = withRouter(({ account, connectWallet, setAccount }) => {
  const [udName, setUDName] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const uauth = new UAuth({
    clientID: 'PZRbgS7HaG59KmXdUbRFjPtJSmu06SYb/iTFWfDIMB4=',
    clientSecret: '+5jiCip3b1WF6bDoxYHFwl2yeOvqvknmcs6rO+BEd40=',
    redirectUri:
      'https://sports-stars-unstoppable-domains.netlify.app/callback',
  })
  const login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
      console.log(authorization)
      setUDName(authorization.idToken.sub)
      console.log('authorization.idToken.sub', authorization.idToken.sub)
    } catch (error) {
      console.error(error)
    }
  }
  const logout = () => {
    console.log('logging out!')
    setAccount('')
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <StylesProvider injectFirst>
      <div className="grow">
        <AppBar position="static">
          <Toolbar>
            <Link to="/" className="whiteLink">
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <Link to="/" className="whiteLink">
              <Typography className="title" variant="h6" noWrap>
                Sports Stars
              </Typography>
            </Link>
            <Button className="whiteLink" component={Link} to="/">
              Home
            </Button>

            <Button className="whiteLink" component={Link} to="/register">
              Register
            </Button>

            <Button className="whiteLink" component={Link} to="/marketplace">
              Goals'Marketplace
            </Button>

            <Button className="whiteLink" component={Link} to="/donate">
              Donate
            </Button>

            <div className="grow" />
            <div className="sectionDesktop">
              {account ? (
                <>
                  <Button
                    variant="contained"
                    className="connected-btn"
                    endIcon={<VerifiedUserSharpIcon />}
                  >
                    {account.substring(0, 8)}...{account.substring(32, 24)}
                  </Button>
                  <Button className="whiteLink" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  className="connect-wallet-btn"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </Button>
              )}

              {/* {account ? (
                <>
                  <Button className="whiteLink">
                    {account.substring(0, 8)}...{account.substring(32, 24)}
                  </Button>
                  <Button
                    variant="contained"
                    className="connected-btn"
                    endIcon={<VerifiedUserSharpIcon />}
                  >
                    Connected
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  className="connect-wallet-btn"
                  onClick={() => {
                    connectWallet()
                  }}
                >
                  Connect Wallet
                </Button>
              )} */}

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className="sectionMobile">
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </StylesProvider>
  )
})
