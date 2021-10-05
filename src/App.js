import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { auth } from './firebase';
import Login from './components/Login';
import { useAuthState } from 'react-firebase-hooks/auth'
import Spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth)
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://www.techrepublic.com/a/hub/i/r/2016/05/17/e5a3713d-ac86-4b59-ac69-4bf2118eaec9/resize/1200x900/94015216f0a729fd4e372588bc358029/slackmarkweb.png" alt="" />
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 200px;
    padding: 20px;
    margin-bottom: 40px;
  }
`

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`