import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import UsStates from "./pages/usStates/UsStates";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/usStates" component={UsStates} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
