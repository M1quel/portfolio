import { Link, navigate, Router } from '@reach/router';
import { useEffect, useState } from 'react';
import './App.scss';
import Info from './components/info/Info';
import Pageheading from './components/PageHeading';
import Cases from "./components/cases/Cases";

function App() {
  var [fullscreen, setFullscreen] = useState(false);
  var [section, setSection] = useState("")

  useEffect(function () {
    navigate("/")
  }, [])
  return (
    <main className="app">
      <Pageheading 
        state={{fullscreen, setFullscreen}}
        sectionClass={{section, setSection}}
      />

      <Info 
      state={{fullscreen, setFullscreen}}
      section={{section, setSection}}
      />
      <Cases 
      state={{fullscreen, setFullscreen}} 
      section={{section, setSection}}
      />
      <div>

      </div>
    </main>
    
  );
}

export default App;
