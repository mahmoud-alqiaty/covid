import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContextProvider from "./components/contextsApi/HomeContext";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
    <HomeContextProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HomeContextProvider>
    </BrowserRouter>
  );
}

export default App;
