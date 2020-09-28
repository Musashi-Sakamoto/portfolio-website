import { useEffect, useState, useRef } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

import CardComponent from "./CardComponent";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    color: "black",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          THREE: THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Grid
      innerRef={myRef}
      container
      className={classes.section}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        justify="center"
        sm={8}
        spacing={5}
      >
        <Grid item container justify="center">
          <Typography variant="h4" align="center">
            Portfolios
          </Typography>
        </Grid>
        <Grid container item spacing={5}>
          <Grid item xs={12} sm={6}>
            <CardComponent
              title="Portfolio"
              description="My own full responsive portfolio site. This is created using NextJS, TypeScript, Material-Ui. For 3d backgrounds, vanta.js is used."
              pageLink="https://portfolio-seven-smoky.now.sh"
              githubLink="https://github.com/Musashi-Sakamoto/portfolio-website"
              imageUrl="https://i.gyazo.com/70e47612132a043d29823801ec7700f2.png"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardComponent
              title="Rock Scissors Paper"
              description="Simple 'Rock Scissors Paper' game you can do with your friend online. I came up with this idea when I was talking on Skype. My friend and I were about to decide something. Then I thought it'd be interesting if we had something like this. Created using React, Express.js, Socket.io, Heroku"
              pageLink="https://frosty-wozniak-9e9679.netlify.app/"
              githubLink="https://github.com/Musashi-Sakamoto/RockScissorsPaper"
              imageUrl="https://i.gyazo.com/a51bedfe584a27e3beac0540b6eb6127.png"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardComponent
              title="Alt Fashion"
              description="E-commerce site created with Gatsby.js and Netlify using Shopify Storefront API. it rebuilds on shopify event or github event. JamStack product."
              pageLink="https://alt.fashion"
              githubLink="#"
              imageUrl="https://i.gyazo.com/27fdfbaf64063d8510c9b34a1b30233d.png"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
