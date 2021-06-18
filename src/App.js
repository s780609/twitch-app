import './App.css';
import GetToken from "./feature/GetToken";
import { Provider } from "react-redux";
import store from './store';
import { useEffect } from 'react';
import GenerateVideoCard from "./components/GenerateVideoCard";

function App() {

  useEffect(async () => {
    await GetToken();
  }, []);

  return (
    <Provider store={store}>
      <GenerateVideoCard />
    </Provider>
  );
}

export default App;
