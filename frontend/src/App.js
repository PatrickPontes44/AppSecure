// import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./pages/Login.js";
import SingUp from "./pages/SingUp.js";

import GlobalStyle from './styles/global.js';

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/singup' component={SingUp} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
