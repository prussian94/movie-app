import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import PropTypes from "prop-types";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export default function TrendingMovieCard(TrendingMovie) {
  TrendingMovie.movieData.propTypes = {
    adult: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  };
  const movie = TrendingMovie.movieData;
  const logo = "https://image.tmdb.org/t/p/w500/:path".replace(
    ":path",
    movie.backdrop_path
  );

  return (
    <Grid
      item
      xs={3}
      style={{
        display: "flex",
        float: "right",
        marginTop: "10px",
        maxHeight: "50vh",
        justifyContent: "center",
      }}
    >
      <Card>
        <CardActionArea
          onClick={() => {
            TrendingMovie.handleOpenModal(movie.id);
          }}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
            background:
              "linear-gradient(90deg, rgba(2,0,36,0.7357317927170868) 0%, rgba(135,13,45,0.8645833333333334) 100%, rgba(255,255,255,1) 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            <StarOutlineIcon style={{ color: "#fc0362", fontSize: "32px" }} />
            <p style={{ color: "#fc0362", margin: "0px", fontWeight: 700 }}>
              {movie.vote_average.toFixed(1)}
            </p>
          </div>
          <CardMedia component="img" image={logo} alt={movie.title} />
          <CardContent style={{ color: "#f0dde0" }}>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
