import { useState } from 'react';
import './App.scss';
import Landing from './components/landing/Landing';
import Scroller from "./components/scroller/scroller";
function App() {
  var [scrollPosition, setScrollPosition] = useState(0)
  
  return (
    <>
      <Scroller setState={setScrollPosition}/>
      <Landing state={scrollPosition}/>
    </>
  );
}

export default App;
