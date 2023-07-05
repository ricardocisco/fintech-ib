import { GlobalStyle } from "./globalStyles";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Page from "./components/pages/Page";
import Pessoas from "./components/pages/Pessoas"
import Dashboard from "./components/pages/Dashboard";
import Carteira from "./components/pages/Carteira";
import Usuarios from "./components/pages/Usuarios";
import Mapa from "./components/pages/Mapa";
import Configuracao from "./components/pages/Configuracao"


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/Page" Component={Page}/>
        <Route path="/Dashboard" Component={Dashboard}/>
        <Route path="/Pessoas" Component={Pessoas}/>
        <Route path="/Carteira" Component={Carteira}/>
        <Route path="/Usuarios" Component={Usuarios}/>
        <Route path="/Mapa" Component={Mapa}/>
        <Route path="/Configuracao" Component={Configuracao}/> 
      </Routes>
    </Router>
  );
}

export default App;
