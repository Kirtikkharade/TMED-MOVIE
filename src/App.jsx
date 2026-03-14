import React, { lazy, Suspense, useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies, fetchTrendingMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchNowPlayingMovies, fetchMoviesByGenre } from "./Api";
import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Loader from "./Component/Loader";
import About from "./Layout/About";
import Contact from "./Layout/Contact";
import CastDetails from "./Layout/CastsDetails";
import Error404 from "./Layout/Error404";

const Home = lazy(() => import("./Layout/Home"));
const Pagination = lazy(() => import("./Component/Pagination"));
const Movie = lazy(() => import("./Layout/Movie"));

const CategoryPage = ({ categoryType, genreId }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let fetchFunc;

    if (categoryType === "trending") {
      fetchFunc = fetchTrendingMovies;
    } else if (categoryType === "top-rated") {
      fetchFunc = fetchTopRatedMovies;
    } else if (categoryType === "upcoming") {
      fetchFunc = fetchUpcomingMovies;
    } else if (categoryType === "now-playing") {
      fetchFunc = fetchNowPlayingMovies;
    } else if (categoryType === "genre") {
      fetchFunc = () => fetchMoviesByGenre(genreId, currentPage);
    } else {
      fetchFunc = fetchPopularMovies;
    }

    fetchFunc(currentPage).then(d => {
      setMovies(d.results);
      setTotalPages(d.total_pages);
      setLoading(false);
    });

  }, [categoryType, currentPage, genreId]);

  function handleNext() {
    setCurrentPage(prev => prev + 1);
    window.scrollTo(0, 0);
  }

  function handlePrev() {
    setCurrentPage(prev => prev - 1);
    window.scrollTo(0, 0);
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Home movie={movies} />
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} handleNext={handleNext} handlePrev={handlePrev} />
    </>
  );
};

const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (search && currentPage) {
      searchMovies(search, currentPage).then(d => {
        setMovies(d.results);
        setTotalPages(d.total_pages);
        setLoading(false);
      });
    } else {
      fetchPopularMovies(currentPage).then(d => {
        setMovies(d.results);
        setTotalPages(d.total_pages);
        setLoading(false);
      });
    }

  }, [search, currentPage]);

  function handleNext() {
    setCurrentPage(prev => prev + 1);
    window.scrollTo(0, 0);
  }

  function handlePrev() {
    setCurrentPage(prev => prev - 1);
    window.scrollTo(0, 0);
  }

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"element={
              <>
                {loading ? (
                  <Loader />
                ) : (
                  <Home movie={movies} />
                )}
                <Pagination currentPage={currentPage}totalPages={totalPages}handleNext={handleNext}handlePrev={handlePrev}/>
              </>
            }
          />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/cast/:id" element={<CastDetails />} />
          <Route path="/trending" element={<CategoryPage categoryType="trending" />} />
          <Route path="/top-rated" element={<CategoryPage categoryType="top-rated" />} />
          <Route path="/upcoming" element={<CategoryPage categoryType="upcoming" />} />
          <Route path="/now-playing" element={<CategoryPage categoryType="now-playing" />} />
          <Route path="/genre/:genreId" element={<GenreRoute />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

const GenreRoute = () => {
  const { genreId } = useParams();
  
  const genreMap = {
    "action": 28,
    "comedy": 35,
    "drama": 18,
    "horror": 27,
    "sci-fi": 878
  };

  const mappedGenreId = genreMap[genreId] || genreId;

  return <CategoryPage categoryType="genre" genreId={mappedGenreId} />;
};

export default App;