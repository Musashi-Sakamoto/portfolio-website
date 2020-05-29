import { useEffect, useState, useRef } from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'
import ScrollButton from './ScrollButton'

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

const AboutMe = () => {
  const classes = useStyles();
  const [vantaEffect, setVantaEffect] = useState<any>(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        THREE: THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <Grid innerRef={myRef} container className={classes.section} justify="center" alignItems="center">
      <Grid item xs={10} sm={6} container justify="center">
        <Typography variant="h4">
          Hello, I am Musashi Sakamoto.
        </Typography>
        <Typography variant="h6" className={classes.padding}>
          I am a fullstack software developer who was born in Japan and currently living in Canada.
        </Typography>
        <ScrollButton to="skills" title="Read more" outlined/>
      </Grid>
    </Grid>
  )
}

export default AboutMe
