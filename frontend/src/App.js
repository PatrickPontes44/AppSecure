// import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";

import GlobalStyle from './styles/global.js';

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
