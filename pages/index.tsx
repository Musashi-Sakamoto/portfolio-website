import Layout from '../components/Layout'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  section: {
    height: '100vh',
  },
  greyBackground: {
    backgroundColor: '#AAA'
  }
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout title="Musashi Sakamoto">
      <Grid container className={classes.section}>
        <h1>Hello Next.js 👋</h1>
      </Grid>
      <Grid container className={`${classes.section} ${classes.greyBackground}`}>
        <h1>Hello Next.js2 👋</h1>
      </Grid>
      <Grid container className={classes.section}>
        <h1>Hello Next.js3 👋</h1>
      </Grid>
      <Grid container className={`${classes.section} ${classes.greyBackground}`}>
        <h1>Hello Next.js4 👋</h1>
      </Grid>
    </Layout>
  )
}

export default IndexPage
