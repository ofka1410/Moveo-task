import React,{useContext} from 'react'
import ContextProvider from './state_management/Use_context';
import Main from './Components/Main'

import {
    BrowserRouter as Router,
    Switch,
    Route,Link} from "react-router-dom";
function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path='/'>
          <Main/>
          </Route>
      
        </Switch>
        

      </Router>
    
    </ContextProvider>
  );
}

export default App;
