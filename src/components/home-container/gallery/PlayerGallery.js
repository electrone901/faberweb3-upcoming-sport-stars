import React, { useEffect, useState } from 'react'
import CircularStatic from '../../commons/CircularProgressWithLabel'
import ImageListItem from '@material-ui/core/ImageListItem'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Container,
  CardActions,
} from '@material-ui/core'
import { apiKey } from '../../../ipfs'
import { Link } from 'react-router-dom'
import './PlayerGallery.css'

function PlayerGallery() {
  const [playersData, setPlayersData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        setLoading(true)
        let cids = await fetch('https://api.nft.storage', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        })
        cids = await cids.json()
        const temp = []
        for (let cid of cids.value) {
          if (cid?.cid) {
            let data = await fetch(
              `https://ipfs.io/ipfs/${cid.cid}/metadata.json`,
            )

            const getImage = (ipfsURL) => {
              if (!ipfsURL) return
              ipfsURL = ipfsURL.split('://')
              return 'https://ipfs.io/ipfs/' + ipfsURL[1]
            }
            data = await data.json()
            const dataArrray = data.description.split('2$,')

            data.bio = dataArrray[0]
            data.sportType = dataArrray[1]
            data.q1 = dataArrray[2]
            data.q2 = dataArrray[3]
            data.q3 = dataArrray[4]
            data.image = await getImage(data.image)
            data.cid = cid.cid
            data.created = cid.created
            temp.push(data)
          }
        }
        setPlayersData(temp)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    loadPlayers()
  }, [])

  return (
    <div
      style={{ minHeight: '70vh', paddingBottom: '3rem', paddingTop: '3rem' }}
    >
      <Container>
        <div className="">
          <h1 className="display-4">Welcome to Sports Stars!</h1>
          <p className="lead">
            This project allows fans to support their favorite sports stars.
            Upon registration, a player is able to receive tokens, early
            supporters are able to buy and sell their tokens. Players will be
            able to register a goal that serves as their profile for fans to
            support them. Investors will be able to buy, sell, and trade
            players' tokens(This is for the future).
          </p>
        </div>
      </Container>
      <div className="label-btns">
        <Chip size="medium" label="Sports" color="primary" clickable />
        <Chip size="medium" label="Blog" clickable />
        <Chip size="medium" label="News" clickable />
        <Chip size="medium" label="Entertainment" clickable />
      </div>
      {loading ? (
        <CircularStatic />
      ) : (
        <div>
          <Grid container spacing={4}>
            {playersData.length ? (
              playersData.map((player, index) => (
                <Grid item md={3} key={index} className="swap-card">
                  <Card sx={{ maxWidth: 245 }}>
                    <CardHeader className="tittle4" subheader={player.name} />

                    <CardMedia
                      component="img"
                      height="194"
                      image={player.image}
                      alt="Player"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="primary"
                        className="card-header-swap"
                      >
                      
                        {player.sportType}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <Button
                        variant="contained"
                        size="small"
                        component={Link}
                        to={`/player-details/${player.cid}`}
                      >
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <h2>No Players Yet...</h2>
            )}
          </Grid>
        </div>
      )}{' '}
    </div>
  )
}

export default PlayerGallery
