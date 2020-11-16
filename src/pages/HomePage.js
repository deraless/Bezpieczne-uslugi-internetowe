import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import mariaimage from "../images/prof2.png"
import michalimage from "../images/prof3.png"
import matiimage from "../images/prof4.png"
import dawidimage from "../images/prof5.png"
import moje5image from "../images/prof9.png"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    margin: 20,
    display: 'flex',
    width: 500,
    height: 300,
    boxShadow: '0px 0px 33px -1px rgba(0,0,0,0.61)',
    border: '1px solid gray'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  typography: {
    width: 250,
    marginTop: 10
  },
  design: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.design}>
      <Card className={classes.root}>

        <div className={classes.details}>

          <CardContent className={classes.content}>

            <Typography component="h5" variant="h5">
              Bartosz Szeląg
          </Typography>
            <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
              My name is Bartosz and currently i'm Junior React Developer in Code NGO.
              In the project i was mainly responsible for site's functionalities, design and styling, authorization module, and all page oriented environment
          </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={moje5image}
          title="Live from space album cover"
        />
      </Card>
      <Card className={classes.root}>

        <div className={classes.details}>

          <CardContent className={classes.content}>

            <Typography component="h5" variant="h5">
              Michal Palarz
          </Typography>

            <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
              I'm Michał, but everyone calls me by my last name. I am a tester of new features designed for 5G networks in Nokia. In the project, I was partially responsible for functionalities and design of the website.
            </Typography>

          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={michalimage}
          title="Live from space album cover"
        />
      </Card>
      <Card className={classes.root}>

        <div className={classes.details}>

          <CardContent className={classes.content}>

            <Typography component="h5" variant="h5">
              Mateusz Mędykowski
          </Typography>
            <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
              My name is Mateusz and I am a Devops engineer in Nokia. In our project I was responsible for infrastructure and monitoring.
          </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={matiimage}
          title="Live from space album cover"
        />
      </Card>
      <Card className={classes.root}>

        <div className={classes.details}>

          <CardContent className={classes.content}>

            <Typography component="h5" variant="h5">
              Maria Jeziorna
          </Typography>
            <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
              My name is Maria and for over a year I’ve been working as a DBA and sysadmin in Red Stack Poland. I was a leader of this project so I was responsible for organization of work and for the whole documentation.
          </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={mariaimage}
          title="Live from space album cover"
        />
      </Card>
      <Card className={classes.root}>

        <div className={classes.details}>

          <CardContent className={classes.content}>

            <Typography component="h5" variant="h5">
              Dawid Grygierzec
          </Typography>
            <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
              I’m Dawid and I’ve just finished internship as sysadmin. Recenty I decided to start learning Python programming. In this project I was partly responsible for infrastructure and for helping with documentation.

          </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={dawidimage}
          title="Maria Jeziorna"
        />
      </Card>
    </div>
  );
}

export default HomePage
