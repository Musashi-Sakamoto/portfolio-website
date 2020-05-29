import { Grid, makeStyles, Typography, IconButton } from '@material-ui/core'

import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const useStyles = makeStyles(() => ({
  section: {
    height: '100vh',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.section} justify="center">
      <Grid item sm={6} container direction="column" justify="center" spacing={5}>
        <Grid item container justify="center">
          <Typography variant="h4" align="center">
            Get in Touch
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Typography variant="body1" align="center">
            Please feel free to get in touch with me if you are interested.
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <IconButton
            aria-label="mail"
            onClick={() => window.location.replace('mailto:1292602b@gmail.com')}
          >
            <AiOutlineMail size='2em' />
          </IconButton>
          <IconButton
            aria-label="linkedIn"
            onClick={() => window.open('https://www.linkedin.com/in/musashi-sakamoto-386461105/')}
          >
            <FaLinkedin size='2em'/>
          </IconButton>
          <IconButton
            aria-label="facebook"
            onClick={() => window.open('https://www.facebook.com/musashi.sakamoto')}
          >
            <FaFacebook size='2em' />
          </IconButton>
          <IconButton
            aria-label="instagram"
            onClick={() => window.open('https://www.instagram.com/musashisakamoto/?hl=ja')}
          >
            <FaInstagram size='2em' />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact
