import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import './PlayerProfile.css'
import {
  Container,
  StylesProvider,
  Typography,
  Button,
  ImageListItem,
  Paper,
  Card,
  Divider,
  Box,
  Grid,
} from '@material-ui/core'
import roadmap from '../../../images/roadmap.png'
import roadmap2 from '../../../images/project.jpg'
import NFTCollection from './covalentAPI-nft-collection/NFTcollection'

function PlayerProfile() {
  const { petId } = useParams()
  const [player, setPlayerData] = useState('')
  const [image, setPetImage] = useState('')

  useEffect(() => {
    if (petId) {
      getMetadata()
      getImage()
    }
  }, [petId])

  const getImage = (ipfsURL) => {
    if (!ipfsURL) return
    ipfsURL = ipfsURL.split('://')
    return 'https://ipfs.io/ipfs/' + ipfsURL[1]
  }

  const getMetadata = async () => {
    let data = await fetch(`https://ipfs.io/ipfs/${petId}/metadata.json`)
    data = await data.json()

    const dataArrray = data.description.split('2$,')
    data.bio = dataArrray[0]
    data.sportType = dataArrray[1]
    data.q1 = dataArrray[2]
    data.q2 = dataArrray[3]
    data.q3 = dataArrray[4]
    setPlayerData(data)

    const imageFormated = await getImage(data.image)
    setPetImage(imageFormated)
  }
  console.log('Player profile data', player)
  return (
    <StylesProvider injectFirst>
      <Container
        className="page-community"
        style={{ minHeight: '70vh', paddingBottom: '1rem' }}
      >
        <div>
          {/* Grid  */}
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography className="title" color="textPrimary" gutterBottom>
                  {player.name}
                </Typography>
                <ImageListItem
                  style={{ height: '400px', width: '450px', listStyle: 'none' }}
                >
                  <img src={image} alt="community" />
                </ImageListItem>
              </Grid>

              <Grid p xs={6} className="grid-rigth-side">
                <div className="page-wallet-address">
                  <Typography color="textPrimary" gutterBottom>
                    <b> WalletAddress:</b>
                    0x83a8bA10cbc13a5Cd827d020693920cc4a7C1103
                  </Typography>
                  <br />
                  <Button variant="contained" color="primary">
                    Send A Tip
                  </Button>
                  <br />
                  <br />

                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/donate"
                  >
                    Donate NFT
                  </Button>

                  <div className="page-metadata">
                    <Typography variant="body2" color="text.secondary">
                      <b> Bio:</b>
                      {player.bio}
                    </Typography>
                    <br />

                    <Typography variant="body2" color="secondary">
                      <b> Sport Type :</b>
                      {player.sportType}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
        <br />
        <br />
        <hr />
        <br />
        {/* Why, How, What, Who */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className="paper">
              <Typography
                className="question-title"
                color="textPrimary"
                gutterBottom
              >
                What
              </Typography>
              <p className="question-answer">
                I want to play for my dream team. I have always dreamt of
                becoming a sports star and this is a great time for me to
                accomplish my dream.
              </p>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className="paper">
              <Typography
                className="question-title"
                color="textPrimary"
                gutterBottom
              >
                How
              </Typography>
              <p className="question-answer">{player.q2}</p>
            </Paper>
          </Grid>
        </Grid>
        <br />
        <br />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className="paper">
              <Typography
                className="question-title"
                color="textPrimary"
                gutterBottom
              >
                Why
              </Typography>
              <p className="question-answer">
                I strongly believe in my dream. Every career has its barriers to
                entry but I will pass those barriers and become what I want.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="paper">
              <Typography
                className="question-title"
                color="textPrimary"
                gutterBottom
              >
                When
              </Typography>
              <p className="question-answer">
                Currently I am training hard and my goal is to become a
                professional player as soon as possible.
              </p>
            </Paper>
          </Grid>
        </Grid>
        <br />

        <Card>
          <div className="status">
            <img src={roadmap} alt="" />
          </div>
        </Card>

        <Card>
          <div className="status">
            <img src={roadmap2} className="roadmap" alt="" />
          </div>
        </Card>

        <NFTCollection />
      </Container>
    </StylesProvider>
  )
}

export default PlayerProfile
