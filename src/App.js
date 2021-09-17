import { useState } from 'react';
import './App.scss';
import Cases from './Cases/Cases';
import Contact from './components/Contact/Contact';
import Cv from './components/CV/CV';
import Landing from './components/landing/Landing';
import Scroller from "./components/scroller/scroller";
function App() {
  var [scrollPosition, setScrollPosition] = useState(0)
  
  return (
    <>
      <Scroller setState={setScrollPosition}/>
      <Landing state={scrollPosition}/>
      <Cv state={scrollPosition}/>
      <Cases state={scrollPosition}/>
      <Contact/>
    </>
  );
}

export default App;
