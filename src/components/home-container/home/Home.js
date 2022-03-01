import React from 'react'
import { StylesProvider, Chip, Container } from '@material-ui/core'
import './Home.css'
import PlayerGallery from '../gallery/PlayerGallery'
import LandingPage from './landing-page/LandingPage'

function MarketPlace() {
  return (
    <StylesProvider injectFirst>
      <Container>
        <PlayerGallery />
      </Container>
    </StylesProvider>
  )
}

export default MarketPlace
