import { makeStyles, Typography, Card, CardActions, CardContent, CardMedia, IconButton } from '@material-ui/core'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineLink } from 'react-icons/ai'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    margin: 'auto'
  },
  media: {
    height: 240,
  },
}));

interface IProps {
  title: string;
  description: string;
  githubLink: string;
  pageLink: string;
  imageUrl: string;
}

const CardComponent = ({ title, description, githubLink, pageLink, imageUrl }: IProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={5}>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      <CardActions>
        <IconButton
          aria-label="github"
          onClick={() => window.open(githubLink)}
        >
          <FaGithub />
        </IconButton>
        <IconButton
          aria-label="link"
          onClick={() => window.open(pageLink)}
        >
          <AiOutlineLink />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CardComponent