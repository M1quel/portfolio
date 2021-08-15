import { useState } from 'react';
import './App.scss';
import Cv from './components/CV/CV';
import Landing from './components/landing/Landing';
import Scroller from "./components/scroller/scroller";
function App() {
  var [scrollPosition, setScrollPosition] = useState(0)
  
  return (
    <>
      <Scroller setState={setScrollPosition}/>
      <Landing state={scrollPosition}/>
      {/* <Cv/> */}
    </>
  );
}

export default App;
