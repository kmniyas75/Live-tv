import Header from "./components/Header";
import Adv from './components/Adv';
import Main from './screens/Main';
import Footer from './components/Footer';
import $ from 'jquery';
import {Routes, Route} from 'react-router-dom';
import Live from "./screens/Live";
import Screen from "./screens/Screen";
import Polling from "./screens/Polling";
import Html from "./screens/Html";


function App() {
  $(".adv-1").show();
setTimeout(function() { $(".adv-1").hide(); }, 5000);
  return (
    <div id="container">
      <header className="header-1"><Header/></header>
<Routes>
  <Route path="/" element={<main className="main-1"><Main/></main>}></Route>
  <Route path="/live" element={<Live/>}></Route>
  <Route path="/screen" element={<Screen />}></Route>
  <Route path="/polling" element={<Polling />}></Route>
  <Route path="/html" element={<Html />}></Route>
</Routes>     
      <nav className="adv-1"><Adv/></nav>
      <footer className="footer"><Footer/></footer>
    </div>
  );
}

export default App;
