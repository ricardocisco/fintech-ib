import { GlobalStyle } from "./globalStyles";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Page from "./components/pages/Page";
import Pessoas from "./components/pages/Pessoas"


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/Page" Component={Page}/>
        <Route path="/Pessoas" Component={Pessoas}/>
      </Routes>
    </Router>
  );
}

export default App;
