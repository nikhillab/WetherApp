import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "margin-top": "20px",
    padding:"10px"
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    height: 150,
    width: 200,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Wind(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
     
      <CardActionArea>
        <Typography gutterBottom variant='h5' component='h2'></Typography>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography gutterBottom variant='h6' component='h5'>
              <b>Wind</b> 
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              <strong>
                Longitude:{props.weatherData.coord.lon}
                <br />
                Latitude: {props.weatherData.coord.lat}
                <br />
                Wind Speed: {props.weatherData.wind.speed} meter/sec <br />
                Wind Deg: {props.weatherData.wind.deg}°
                <br />
                TimeZone: {props.weatherData.timezone} UTC
                <br />
              </strong>
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
      <CardMedia
        className={classes.cover}
        image={'https://cdn4.iconfinder.com/data/icons/buildings-79/64/123-512.png'}
        title="humidity"
      />
    </Card>
  );
}
