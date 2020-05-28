import { Grid, makeStyles, Typography } from '@material-ui/core'
import { FaHtml5, FaCss3, FaReact, FaDocker, FaNodeJs, FaAws } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { GrMysql, GrSwift, GrGithub, GrHeroku } from 'react-icons/gr'
import { DiMongodb } from 'react-icons/di'
import { BsCodeSlash } from 'react-icons/bs'
import TypeScriptIcon from '../images/typescript.svg';

const useStyles = makeStyles(theme => ({
  section: {
    height: '100vh',
  },
  wrapper: {
    paddingTop: theme.spacing(5)
  },
  skills: {
    paddingTop: theme.spacing(5)
  },
  icon: {
    height: '41px',
    width: '41px',
    marginLeft: theme.spacing(2)
  },
  tsIcon: {
    height: '56px',
    width: '56px',
  },
  iconWrapper: {
    textAlign: 'center'
  }
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.section} justify="center">
      <Grid item sm={6} container direction="column" justify="center">
        <Grid item container justify="center">
          <Typography variant="h4" align="center">
            My Skills 
          </Typography>
          <BsCodeSlash size="4em" className={classes.icon}/>
        </Grid>
        <Grid container item className={classes.skills} spacing={5}>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <FaHtml5 size='4em' title="html" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <FaCss3 size='4em' title="css" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <IoLogoJavascript size='4em' title="javascript" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <img className={classes.tsIcon} src="https://img.icons8.com/material-sharp/48/000000/typescript.png" title="typescript" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <GrSwift size='4em' title="swift" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <GrMysql size='4em' title="mysql" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <FaReact size='4em' title="react" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <GrGithub size='4em' title="github" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <FaDocker size='4em' title="docker" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <FaNodeJs size='4em' title="nodejs" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <FaAws size='4em' title="aws" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <DiMongodb size='4em' title="mongodb" />
          </Grid>
          <Grid item sm={3} xs={6} className={classes.iconWrapper}>
            <GrHeroku size='4em' title="heroku" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Skills
