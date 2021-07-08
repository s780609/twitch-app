import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from './store';
import GenerateVideoCard from "./components/GenerateVideoCard";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [gameName, setGameName] = useState("");
  const [searchValue, setSearchValue] = useState("");

  function onChange(e) {
    setSearchValue(e.target.value);
    setGameName("");
  }

  function onClick(e) {
    setGameName(searchValue);
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Navbar expand="lg" bg="dark" variant="dark">
            <Nav className="container-fluid" >
              <Navbar.Brand>{`煥煥的選擇`}</Navbar.Brand>
              <Form inline className="ml-auto">
                <FormControl type="input" placeholder="Search Game Name" className="mr-sm-2" onChange={onChange} onKeyPress={onClick} />
                <Button variant="outline-success" onClick={onClick}>Search</Button>
              </Form>
            </Nav>
          </Navbar>
        </>
        <Switch>
          {/* <Route path="/twitch-app/videos"> */}
          <GenerateVideoCard gameName={gameName} />
          {/* </Route> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
