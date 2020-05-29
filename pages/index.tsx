import Layout from '../components/Layout'
import { Grid, makeStyles } from '@material-ui/core'
import { Element } from 'react-scroll'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

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
        <Portfolio />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </Layout>
  )
}

export default IndexPage
