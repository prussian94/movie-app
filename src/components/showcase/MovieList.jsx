/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import TrendingMovieCard from "./TrendingMovie";
import { useState } from "react";
import MovieDetailModal from "../modal/MovieDetailModal";

export default function MovieList(props) {
  const movies = props.movies;
  const [modalState, setModalState] = useState({ id: null, open: false });
  const handleOpenModal = (id) => {
    setModalState({
      id: id,
      open: true,
    });
  };
  const handleCloseModal = () => {
    setModalState({
      id: null,
      open: false,
    });
    return modalState;
  };
  return (
    <Grid
      container
      spacing={6}
      style={{
        overflow: "hidden",
      }}
    >
      {movies.map((item) => (
        <TrendingMovieCard
          movieData={item}
          key={item.id}
          handleOpenModal={handleOpenModal}
        />
      ))}
      <MovieDetailModal
        setModalState={setModalState}
        modalState={modalState}
        handleCloseModal={handleCloseModal}
      />
    </Grid>
  );
}
