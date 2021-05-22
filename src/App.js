import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import {Navigation} from "./components/Navigation";
import {About} from "./components/About";
import {Project} from "./components/Project";
import {Contacts} from "./components/Contacts";
import {Masthead} from "./components/Masthead";
import {Footer} from "./components/Footer";
import {Signup} from "./components/Signup";

function App() {
  return (
    <div>
        <Masthead/>
        <Navigation/>
        <About/>
        <Project/>
        <BrowserRouter>
            <Route path="/start" component={()=><Navigation/>}></Route>
            <Route path="/about" component={()=><About/>}></Route>
            <Route path="/projects" component={()=><Project/>}></Route>
            <Route path="/contact-us" component={()=><Contacts/>}></Route>
        </BrowserRouter>
        <Signup/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
