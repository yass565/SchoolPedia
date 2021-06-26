import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Annuaire from "./Components/Annuaire";
import UniversityDetails from "./Components/UniversityDetails";
import Inscription from "./Components/Inscription";
import AddCountry from "./Components/AddCountry";
import Apropos from "./Components/Apropos";
import CommentPostuler from "./Components/CommentPostuler";
import Cooperation from "./Components/Cooperation";
import Sidebar from './Components/Sidebar';
import Profile from './Components/Profile';
import Dossier from "./Components/Dossier";
import Postuler from "./Components/Postuler";
import MesCandidatures from "./Components/MesCandidatures";
import Contact from "./Components/Contact";
import CreateSchool from "./Components/CreateSchool";
import Show from "./Components/Show";
import UniversityUpdate from "./Components/UniversityUpdate";
function App() {
  return (
      <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/:nomPays/etablissements/:nomEtablissement" component={UniversityDetails}/>
        <Route path="/Show"><Show/></Route>
        {/*<Route path="/UniversityUpdate/:id" component={UniversityUpdate}/>*/}
        <Route path="/:nomPays/etablissements" component={Annuaire}/>
        <Route path="/Profile"><Profile/></Route>
        <Route path="/Dossier"><Dossier/></Route>
        <Route path="/postuler"><Postuler/></Route>
        <Route path="/candidatures"><MesCandidatures/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/sidebar"><Sidebar/></Route>
        <Route path="/Cooperation"><Cooperation/></Route>
        <Route path="/commentPostuler"><CommentPostuler/></Route>
        <Route path="/apropos"><Apropos/></Route>
        <Route path="/universite_de_ouagadougou"><UniversityDetails/></Route>
        <Route path="/Inscription"><Inscription/></Route>
        <Route path="/AddCountry"><AddCountry/></Route>
        {/*<Route path="/create-school"><CreateSchool/></Route>*/}
        <Route path="/"><Home/></Route>
      </Switch>
    <Footer/>
    </div>
</Router>
  );
}

export default App;
