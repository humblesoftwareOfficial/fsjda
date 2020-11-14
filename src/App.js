import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from './Components/Home/Accueil'
import './App.css';
import "video-react/dist/video-react.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inscription from './Components/Management/Inscription/Inscription';
import Palmares from './Components/Management/Palmares/Palmares';
import Mediatheque from './Components/Management/Mediatheque/Mediatheque';
import Federation from './Components/Federation/Federation';
import JudoSengage from './Components/JudoSengage/JudoSengage';
import Gloires from './Components/Management/Gloires/Gloires'
import Ligues from './Components/Ligues/Ligues'
import ListeClub from './Components/Management/Club/ListeClub'
import Calendrier from './Components/Management/Calendrier/Calendrier'
import LoginEspace from './Components/Espace/LoginEspace';
import Tokyo from './Components/Tokyo/Tokyo';
import NotFound from './Components/Utils/NotFound'
export default class App extends Component {
  componentDidMount() {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
    document.addEventListener('keypress', function(e) {
      if(e.which === 123) {
        e.preventDefault();
      }
    });
    document.onkeydown = function(e) {
      if(e.keyCode === 123) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
         return false;
      }
    }
  }
  logKey(e) {
    alert(e)
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/accueil" exact component={Accueil} />
          <Route path="/inscription" exact component={Inscription} />
          <Route path="/ligues" exact component={Ligues} />
          <Route path="/palmares" exact component={Palmares} />
          <Route path="/mediatheque" exact component={Mediatheque} />
          <Route path="/federation" exact component={Federation} />
          <Route path="/judo" exact component={JudoSengage} />
          <Route path="/gloires" exact component={Gloires} />
          <Route path="/clubs" exact component={ListeClub} />
          <Route path="/calendrier" exact component={Calendrier} />
          <Route path="/espacel" exact component={LoginEspace} />
          <Route path="/tokyo" exact component={Tokyo} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
          </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

