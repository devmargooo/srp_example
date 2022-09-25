import React from 'react';
import './App.css';
import {Notification} from "./pages/Notification";
import {StoriesPage} from "./pages/StoriesPage";
import {Posts} from "./pages/Posts";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Notification/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/input" element={<StoriesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
