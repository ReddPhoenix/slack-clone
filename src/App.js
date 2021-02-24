import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/room'>
            <Chat />
          </Route>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
