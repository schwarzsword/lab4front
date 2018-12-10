import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import Login from "../Login";
import Main from "../Main";
import AppliedRoute from "../../components/AppliedRoute";


export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/login" exact component={Login} props={childProps} />
        <AppliedRoute path="/main" exact component={Main} props={childProps} />
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
    </Switch>;

