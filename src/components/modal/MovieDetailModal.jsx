/* eslint-disable react/prop-types */
import { React, useEffect, useState } from "react";
import { Modal, Fade, Backdrop } from "@mui/material";
import { fetchMovieDetail } from "../../clients/MovieDBClient";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { sendMessage } from "../../helpers/aws/SQSHelper";

function MovieDetailModal(props) {
  const { modalState, handleCloseModal } = props;
  const [movieDetail, setMovieDetail] = useState({});

  const loadData = async () => {
    const result = await fetchMovieDetail(modalState.id);
    setMovieDetail(result);
    sendMessage(result);
  };

  useEffect(() => {
    console.log("id ", modalState.id);
    if (modalState.id && modalState) {
      loadData();
    }
  }, [modalState.id]);

  // eslint-disable-next-line no-unused-vars
  const posterImage = "https://image.tmdb.org/t/p/w500/:path".replace(
    ":path",
    movieDetail.poster_path
  );

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="modal"
      open={props?.modalState.open || false}
      onClose={() => handleCloseModal()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade in={props?.modalState.open || false}>
        <Card
          sx={{ maxWidth: 690 }}
          style={{
            position: "relative",
            backgroundSize: "cover",
            borderRadius: "16px",
          }}
        >
          <CardActionArea>
            <div
              style={{
                position: "relative",
                zIndex: 10,
                marginTop: "540px",
                background:
                  "linear-gradient(90deg, rgba(2,0,36,0.7357317927170868) 0%, rgba(230,34,131,1) 100%, rgba(255,255,255,1) 100%)",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#f0dde0"
                >
                  {movieDetail.title}
                </Typography>
                <Typography variant="body2" color="#f0dde0">
                  {movieDetail.overview}
                </Typography>
                <Typography
                  variant="body2"
                  color="#f0dde0"
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    flexDirection: "column",
                    justifyContent: "right",
                  }}
                >
                  <div
                    style={{
                      background: "black",
                      opacity: "50%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "baseline",
                      padding: "8px",
                      minWidth: "196px",
                      borderRadius: "16px",
                      color: "white",
                    }}
                  >
                    <span>
                      Release Date: {movieDetail.release_date} <br />
                    </span>
                    <span>
                      Budget:
                      {movieDetail.budget == 0
                        ? " Unknown"
                        : movieDetail.budget}
                      $ <br />
                    </span>
                    <span>
                      Average Vote:
                      {Number(movieDetail.vote_average).toFixed(1)}
                    </span>
                  </div>
                </Typography>
              </CardContent>
            </div>
            <div
              style={{
                position: "absolute",
                objectFit: "cover",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1,
              }}
            >
              <img
                src={posterImage}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </CardActionArea>
          <CardActions
            style={{
              zIndex: 1,
            }}
          >
            <Button
              style={{
                zIndex: 1,
                background:
                  "linear-gradient(90deg, rgba(2,0,36,0.7357317927170868) 0%, rgba(230,34,131,1) 100%, rgba(255,255,255,1) 100%)",
                color: "#ede6e8",
              }}
              size="small"
              onClick={
                movieDetail.homepage
                  ? () => window.open(movieDetail.homepage)
                  : () => {}
              }
            >
              Homepage
            </Button>
          </CardActions>
        </Card>
      </Fade>
    </Modal>
  );
}

export default MovieDetailModal;
