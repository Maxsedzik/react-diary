import Home from "./components/Home";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/addnote' component={AddNote} />
          <Route path='/notes' component={Notes} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
