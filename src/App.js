import './App.css';
import Index from './pages/Index';
import Appointments from './pages/Appointments';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/appt' component={Appointments} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

