import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.scss';
import Header from './Components/Header/Header/Header';
import TeamDetail from "./Components/Team/TeamDetail/TeamDetail";

function App() {
  return (
    <div className="App">
     
      <Router>
        <Switch>
         
          <Route exact path="/explore/:id">
            <TeamDetail/>
          </Route>
          <Route exact path="/">
          <Header/> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
