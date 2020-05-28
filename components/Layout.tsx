import * as React from 'react'
import Head from 'next/head'
import { AppBar, Button, makeStyles, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert'
import { Link } from 'react-scroll'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button color="inherit">
          <Link to="about_me"
            smooth={true}
            offset={-50}
            duration={500}
            delay={500}>
            <Typography color="inherit">About me</Typography>
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit">
          <Link to="interests" smooth={true}
            offset={-50}
            duration={500}
            delay={500}>
            <Typography color="inherit">Interests</Typography>
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit">
        <Link to="portfolios" smooth={true}
            offset={-50}
            duration={500}
            delay={500}>
          <Typography color="inherit">Portfolios</Typography>
        </Link>
      </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit">
          <Link to="contact" smooth={true}
            offset={-50}
            duration={500}
            delay={500}>
            <Typography color="inherit">Contact</Typography>
          </Link>
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppBar position="fixed">
          <Toolbar variant="dense">
            <Typography variant="h6" className={classes.title}>
              Musashi Sakamoto
            </Typography>

            <div className={classes.sectionDesktop}>
              <Button color="inherit">
                <Link to="about_me" smooth={true}
                  offset={-50}
                  duration={500}
                  delay={500}>
                  <Typography color="inherit">About me</Typography>
                </Link>
              </Button>

              <Button color="inherit">
                <Link to="interests" smooth={true}
                  offset={-50}
                  duration={500}
                  delay={500}>
                    <Typography color="inherit">Interests</Typography>
                </Link>
              </Button>
    
              <Button color="inherit">
                <Link to="portfolios" smooth={true}
                  offset={-50}
                  duration={500}
                  delay={500}>
                    <Typography color="inherit">Portfolios</Typography>
                </Link>
              </Button>
    
              <Button color="inherit">
                <Link to="contact" smooth={true}
                  offset={-50}
                  duration={500}
                  delay={500}>
                  <Typography color="inherit">Contact</Typography>
                </Link>
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls='primary-search-account-menu-mobile'
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
          </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
          <Box marginTop={3}>
            {children}
          </Box>
    </div>
  )
}

export default Layout
