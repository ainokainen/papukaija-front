import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from "./Home";
import Profiili from './Profiili';
import { HaeKayttaja, LisaaTehtava, MuokkaaTehtavaa } from '../serviceclient';
import "../App.css"
import { Media, Nav, NavItem } from "react-bootstrap";
import "./Navigation.css";
import Done from './Done';

class Routing extends Component {
    constructor(props) {
        super(props);
        this.state = { kayttaja: { Tehtava: [] } }
    }

    componentDidMount = () => {
        this.KayttajanHaku();
    }
    // Tässä käyttäjän hakeminen tietokannasta => renderin päivityskäytössä!
    // Nyt käyttäjä saadaan suoraan loginilta, joten nyt vain päivityskäytössä
    KayttajanHaku = () => {
        HaeKayttaja(this.props.user.ID, this.AsetaStateen);
    }
    AsetaStateen = value => {
        this.setState({ kayttaja: value })
        console.log("App:ssa state: " + this.state);
    }

    // Uuden tehtävän lisäys kantaan
    UusiTehtavaHandler = (task) => {
        console.log("seuraavaksi terveisiä app uuden tehtävän handlerista")
        console.log(task);
        LisaaTehtava(task, this.KayttajanHaku);
    }
    MuokkaaTehtavaaHandler = (task) => {
        console.log("seuraavaksi terveisiä muokkaatehtavaa handlerista")
        console.log(task);
        MuokkaaTehtavaa(task, this.KayttajanHaku);
    }

    render() {

        this.tehdyt = this.state.kayttaja.Tehtava.filter(tehtava => tehtava.Tehty === true);
        this.eiTehdyt = this.state.kayttaja.Tehtava.filter(tehtava => tehtava.Tehty === false);

        return (
            <div>
                <div className="navi">
                    <Nav bsStyle="pills">
                        <li role="presentation" className="navItems">
                            <NavLink to="/" >
                                Koti
                            </NavLink>
                        </li>
                        <li role="presentation" className="navItems">
                            <NavLink to="/Profiili" >
                                Kayttajan tiedot
                            </NavLink>
                        </li>
                        <li role="presentation" className="navItems">
                            <NavLink to="/done" >
                                Tehdyt
                             </NavLink>
                        </li>
                        <NavItem>
                            <Media>
                                <Media.Left align="bottom">
                                    <img className="image" src="https://trello-attachments.s3.amazonaws.com/5bd715c372be28202555c3ef/5bd80baf68c39a065a05d18e/b2966e72bd3b5aeb14570f8a36b8e044/Gold.png" alt="parrot" />
                                </Media.Left>
                            </Media>
                        </NavItem>
                    </Nav>
                </div>
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} eiTehdytTehtavat={this.eiTehdyt} tehtavaHandler={this.UusiTehtavaHandler} />} />
                    <Route path="/profiili" render={props => <Profiili {...props} profiili={this.props.user} />} />
                    <Route path="/done" render={props => <Done {...props} tehdytTehtavat={this.tehdyt} />} />

                </Switch>
            </div>
        );
    }
}



export default Routing;
