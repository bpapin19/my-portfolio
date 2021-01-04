import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/portfolio' exact/>
        <Route component={About} path='/portfolio/about' />
        <Route component={Contact} path='/portfolio/contact' />
        <Route component={Project} path='/portfolio/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
