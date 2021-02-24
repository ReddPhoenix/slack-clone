import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat.jsx';
import Login from './components/Login.jsx';
import Header from './components/Header.jsx';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
          <Switch>
            <Route path='/room'>
              <Chat />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: grey;
  display: grid;
  grid-template-rows: 38px auto
`

const Main = styled.div`
background: purple;
`