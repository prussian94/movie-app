/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import TrendingMovieCard from "../components/showcase/TrendingMovie";
import MovieDetailModal from "../components/modal/MovieDetailModal";
import { useEffect, useState } from "react";
import { fetchMoviesByGenreId } from "../clients/MovieDBClient";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import "../App.css";
import Pagination from "../components/Pagination";

export default function MovieListByGenre() {
  let { id } = useParams();
  const [movieList, setMovieListData] = useState({ movies: [] });

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchMoviesByGenreId(id);
      setMovieListData({ movies: result.results });
    };
    loadData();
  }, [id]);
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
    <div className="App">
      <Navbar />
      <Body>
        <Grid
          container
          spacing={6}
          style={{
            overflow: "hidden",
          }}
        >
          {movieList.movies.map((item) => (
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
        <Pagination color="primary" />
      </Body>
    </div>
  );
}
