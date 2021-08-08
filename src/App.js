import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContextProvider from "./components/contextsApi/HomeContext";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import UsStates from "./pages/usStates/UsStates";

function App() {
  return (
    <BrowserRouter>
    <HomeContextProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/usStates" component={UsStates} />
      </Switch>
    </HomeContextProvider>
    </BrowserRouter>
  );
}

export default App;
