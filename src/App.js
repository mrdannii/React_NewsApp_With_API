import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<News htag="Top General Headlines" apiKey="e19b29d02b8b4f7f97985845d7c73e19" country="us"  category="general"/>}/>
          <Route exact path="/business" element={<News htag="Top Business Headlines" apiKey="e19b29d02b8b4f7f97985845d7c73e19" country="us"  category="business"/>}/>
          <Route exact path="/entertainment" element={<News htag="Top Entertainment Headlines" apiKey="e19b29d02b8b4f7f97985845d7c73e19" country="us"  category="entertainment"/>}/>
          <Route exact path="/health" element={<News htag="Top Health Headlines" apiKey="e19b29d02b8b4f7f97985845d7c73e19" country="us"  category="health"/>}/>
          <Route exact path="/science" element={<News htag="Top Science Headlines" apiKey="e19b29d02b8b4f7f97985845d7c73e19" country="us"  category="science"/>}/>
          <Route exact path="/sports" element={<News htag="Top Sports Headlines" apiKey="e19b29d02b8b4f7f97985845d7c73e19" country="us"  category="sports"/>}/>
          <Route exact path="/technology" element={<News htag="Top Technology Headlines" apiKey="e19b29d02b8b4f7f97985845d7c73e19" country="us"  category="technology"/>}/>
  
          </Routes>
        </Router>
      </>
    );
  }
}
