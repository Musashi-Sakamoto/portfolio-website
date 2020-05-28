import Layout from '../components/Layout'
import { Grid, makeStyles } from '@material-ui/core'
import { Element } from 'react-scroll'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'

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

  return (
    <Layout title="Musashi Sakamoto">
      <Element name="about_me">
        <AboutMe />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="portfolios">
        <Grid container className={`${classes.section} ${classes.greyBackground}`}>
          <h1>Hello Next.js3 👋</h1>
        </Grid>
      </Element>
      <Element name="contact">
        <Grid container >
          <h1>Hello Next.js4 👋</h1>
        </Grid>
      </Element>
    </Layout>
  )
}

export default IndexPage
