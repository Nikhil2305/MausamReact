import React, { Component } from 'react';
import Header from './Headercomponent';
import Home from './Homecomponent';
import About from './Aboutcomponent';
import Checkweather from './Checkweathercomponent';
import Contact from './Contactcomponent';
import Airquality from './Airqualitycomponent';
import Blog from './Blogcomponent';
import Footer from './Footercomponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


class Main extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/About" component={About} />
                        <Route exact path="/Checkweather" component={Checkweather} />
                        <Route exact path="/Airquality" component={Airquality} />
                        <Route exact path="/Blog" component={Blog} />
                        <Route exact path="/Contact" component={Contact} />

                        <Redirect to="/Home" />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default Main;