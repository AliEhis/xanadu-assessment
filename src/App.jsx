import React from "react";
import Home from "./pages/Home";
import Event from "./pages/Event";
import EventList from "./pages/EventList";
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:category/:categoryId" element={<EventList />} />
        <Route path="/event/:category/:event/:eventId" element={<Event />} />
      </Routes>
    </Router>
  )
};

export default App;