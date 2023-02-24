import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import MovieIcon from "@mui/icons-material/Movie";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchGenreList } from "../clients/MovieDBClient";
import { useEffect } from "react";
import { useRef } from "react";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenGenresMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseGenresMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  const handleAbout = () => navigate("/about");
  const handleGenre = (genreId) => navigate(`/genre/${genreId}`);

  const [genresList, setGenresData] = useState({ genres: [] });
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      const loadData = async () => {
        const result = await fetchGenreList();
        console.log("result.genres :>> ", result.genres);
        setGenresData({ genres: result.genres });
      };
      ref.current = false;

      loadData();
    }
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#123",
        color: "#c73e59",
        background:
          "linear-gradient(90deg,rgba(135,13,45,0.8645833333333334) 0%, rgba(2,0,36,0.7357317927170868) 100%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MovieIcon
            style={{ fontSize: "40px", color: "#c93654" }}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            style={{ marginRight: "250px" }}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "30px",
            }}
          >
            MOVNEO MOVIE STUDIOS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MMS
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ display: { xs: "none", md: "flex" }, marginRight: "16px" }}
            >
              <Button
                key={"page"}
                onClick={() => handleAbout()}
                sx={{ color: "white", display: "block" }}
              >
                <Typography style={{ color: "#c73e59" }}>About Us</Typography>
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open genres">
                <IconButton onClick={handleOpenGenresMenu} sx={{ p: 0 }}>
                  <Typography style={{ color: "#c73e59" }}>Genres</Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseGenresMenu}
              >
                {genresList.genres.map((genre) => (
                  <MenuItem
                    key={genre.id}
                    onClick={() => handleGenre(genre.id)}
                  >
                    <Typography style={{ color: "black" }} textAlign="center">
                      {genre.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
