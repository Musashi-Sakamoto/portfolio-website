import { useEffect, useState, useRef } from 'react'
import { Grid, makeStyles, Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

const useStyles = makeStyles(theme => ({
  section: {
    minHeight: '100vh',
    color: 'white',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  root: {
    maxWidth: 345,
    margin: 'auto'
  },
  media: {
    height: 140,
  },
}));

const CardComponent = ({ classes }) => (
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
)

const Portfolio = () => {
  const classes = useStyles();
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        THREE: THREE,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <Grid innerRef={myRef} container className={classes.section} justify="center" alignItems="center">
      <Grid item container direction="column" justify="center" sm={8} spacing={2}>
        <Grid item container justify="center">
          <Typography variant="h4" align="center">
            Portfolios 
          </Typography>
        </Grid>
        <Grid container item spacing={5}>
          <Grid item xs={12} sm={6}>
            <CardComponent classes={classes} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardComponent classes={classes} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardComponent classes={classes} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio
