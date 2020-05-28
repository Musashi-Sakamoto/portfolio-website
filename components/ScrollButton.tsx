import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-scroll'

interface IProps {
  to: string;
  title: string;
  outlined?: Boolean;
}

const ScrollButton = ({ to, title, outlined }: IProps) => (
  <Button color="inherit" variant={outlined ? 'outlined' : 'text'}>
    <Link to={to} smooth={true}
      offset={-50}
      duration={500}
      delay={500}>
      <Typography color="inherit">{title}</Typography>
    </Link>
  </Button>
)

export default ScrollButton