import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "../src/components/join/join";
import Chatbox from "./components/chatbox/chatbox";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chatbox} />
    </Router>
  );
}

export default App;
