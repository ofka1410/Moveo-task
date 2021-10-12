import React,{useContext} from 'react'
import ContextProvider from './state_management/Use_context';
import Main from './Components/Main'


function App() {
  return (
    <ContextProvider>
          <Main/>
    </ContextProvider>
  );
}

export default App;
