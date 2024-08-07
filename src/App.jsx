import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ListModal from "./components/ListModal";
import { movies } from "./data/movies";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [listType, setListType] = useState("");

  const handleShowModal = (type) => {
    setListType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Router>
      <div className="App">
        <Navbar handleShowModal={handleShowModal} />
        <Routes>
          <Route path="/" element={<HomePage movies={movies} />} />
        </Routes>
        <ListModal show={showModal} handleClose={handleCloseModal} listType={listType} />
      </div>
    </Router>
  );
};

export default App;
