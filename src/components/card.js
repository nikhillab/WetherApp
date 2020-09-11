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
    "margin-top": "25px",
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
    width: 120,
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

const convertToCel = (num) => {
  num = Number(num) - 273.15;
  return num.toFixed(0.2);
};

export default function DataCard(props) {
  const classes = useStyles();
  const icon = props.weatherData.weather[0].icon;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography gutterBottom variant='h5' component='h2'>
          <b>{props.weatherData.name + "," + props.weatherData.sys.country + "🌡"}</b>
        </Typography>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography gutterBottom variant='h5' component='h2'>
              {convertToCel(props.weatherData.main.temp) + "°C"}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              <strong>
                <b>{props.weatherData.weather[0].description}</b>
              </strong>
              <br />
              {convertToCel(props.weatherData.main.temp_max) +
                "°/" +
                convertToCel(props.weatherData.main.temp_min) +
                "°"}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
      <CardMedia
        className={classes.cover}
        image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        title={props.weatherData.weather[0].main}
      />
    </Card>
  );
}
