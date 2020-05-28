import { useEffect, useState, useRef } from 'react'
import { Grid, makeStyles, Typography, Button } from '@material-ui/core'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

const useStyles = makeStyles(theme => ({
  section: {
    height: '100vh',
    color: 'white'
  },
  padding: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

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
      <Grid item sm={6} container direction="column" justify="center">
        <Grid item container justify="center">
          <Typography variant="h4" align="center">
            Portfolios 
          </Typography>
        </Grid>
        <Grid container item spacing={5}>
          
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio
