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

const convertToCel = (num) => {
  num = Number(num) - 273.15;
  return num.toFixed(0.2);
};

export default function ComfortLevel(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={"https://icon-library.com/images/humid-icon/humid-icon-10.jpg"}
        title='humidity'
      />
      <CardActionArea>
        <Typography gutterBottom variant='h5' component='h2'></Typography>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography gutterBottom variant='h6' component='h5'>
              <b>Comfort Level</b>
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              <strong>
                {" "}
                Clouds:{props.weatherData.clouds.all + " %"}
                <br />
                Feels Like: {convertToCel(props.weatherData.main.feels_like)}°C
                <br />
                Humidity: {props.weatherData.main.humidity} %<br />
                Pressure: {props.weatherData.main.pressure} hPa
                <br />
                Visibility: {props.weatherData.visibility} meter
                <br />
              </strong>
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}
