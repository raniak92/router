import Movies from "./components/Movies.js";
import MovieList from "./components/MovieList.js";
import AddToTheList from "./components/AddToTheList.js";
import Search from "./components/Search.js";
import React, { useState } from "react";
import { Navbar, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Description from "./components/Description.js";

function App() {
  const [movieFlow, setMovieFlow] = useState(Movies);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState(0);
  const filter1 = (e) => setSearch1(() => e.target.value);
  const filter2 = (e) => setSearch2(e);
  const addMovie = (el) => setMovieFlow([...movieFlow, el]);
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar collapseOnSelect="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              Movie Application{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Search search1={filter1} search2={filter2} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <MovieList movie={movieFlow} name={search1} rating={search2} />
            }
          />
          <Route
            path="/description/:id"
            element={<Description movies={Movies} />}
          />
        </Routes>
      </div>
      <AddToTheList addMovie={addMovie} />
    </div>
  );
}
export default App;
