import React, { Suspense, lazy } from 'react';
import Loader from "react-loader-spinner";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
const Home = lazy(() => import("./components/home"));
const About = lazy(() => import("./components/about"));
const Contact = lazy(() => import("./components/contact"));
const NotFound = lazy(() => import("./components/notFound"));
function App() {
  return (
    <Router style={{ margin: 0 }}>
      <Suspense fallback={<div style={{ position: 'absolute', top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>}>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route path component={NotFound} />
        </Switch>
      
      </Suspense>
    </Router>
  );
}

export default App;
