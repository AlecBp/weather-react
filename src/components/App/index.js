import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import WeatherPage from "../../pages/WeatherPage";
import Navbar from "../Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/weather" component={WeatherPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
