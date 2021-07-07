import { useEffect } from 'react';
import './App.scss';
import Heading from "./components/heading/Heading";
import hoverMainSections from './helperFunctions/hoverMainSections.js';
function App() {
  return (
    <div className="app">
      <Heading/>
        <div onMouseOver={() => {hoverMainSections.cv()}} className="mainSection mainSection__cv">
          <h1>CV</h1>
        </div>
        <div onMouseOver={() => {hoverMainSections.contact()}} className="mainSection mainSection__contact">
          <h1>Contact</h1>
        </div>
        <div onMouseOver={() => {hoverMainSections.projects()}} className="mainSection mainSection__projects">
          <h1>Projects</h1>
        </div>
    </div>
    
  );
}

export default App;
