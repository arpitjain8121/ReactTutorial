import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Ecommerce from "./Ecommerce";
import PayrollSolution from "./PayrollSolution";
import PointSale from "./PointSale";
import Home from "./Home";
import $ from "jquery";
import Privacypolicy from "./Privacypolicy";

class App extends React.Component {
    componentDidMount() {
        $(".mobile_nav").click(function () {
            $(".et_mobile_menu").slideToggle();
        });

      
    }

    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/point-of-sale" component={PointSale} />
                    <Route exact path="/payroll-soution" component={PayrollSolution} />
                    <Route exact path="/e-commerce" component={Ecommerce} />
                    <Route exact path="/privacy-policy" component={Privacypolicy} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </>
        );
    }
}

export default App;
