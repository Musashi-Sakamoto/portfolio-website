import { useEffect, useState, useRef } from 'react'
import Layout from '../components/Layout'
import { Grid, makeStyles } from '@material-ui/core'
import { Element } from 'react-scroll'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'

const useStyles = makeStyles(theme => ({
  section: {
    height: '100vh',
  },
  greyBackground: {
    backgroundColor: '#AAA'
  },
  section1: {
    color: '#FFF'
  }
}));

const IndexPage = () => {
  const classes = useStyles();
  const [vantaEffect, setVantaEffect] = useState(0)
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
    <Layout title="Musashi Sakamoto">
      <Element name="about_me">
        <Grid innerRef={myRef} container className={`${classes.section} ${classes.section1}`}>
          <h1>Hello, my name is Musashi Sakamoto.</h1>
        </Grid>
      </Element>
      <Element name="interests">
        <Grid container className={`${classes.section} ${classes.greyBackground}`}>
          <h1>Hello Next.js2 👋</h1>
        </Grid>
      </Element>
      <Element name="portfolios">
        <Grid container className={classes.section}>
          <h1>Hello Next.js3 👋</h1>
        </Grid>
      </Element>
      <Element name="contact">
        <Grid container className={`${classes.section} ${classes.greyBackground}`}>
          <h1>Hello Next.js4 👋</h1>
        </Grid>
      </Element>
    </Layout>
  )
}

export default IndexPage
