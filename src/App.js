import logo from './logo.svg';
import './App.css';
import {store} from "./Redux/store";
import {Provider} from 'react-redux';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar/>
        <AllRoutes/>
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
