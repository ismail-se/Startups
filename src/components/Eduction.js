import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Bootcamp from "./Bootcamp";
import Formation from "./Formation";
import Founder from "./Founder";
import Idea from "./Idea";
import Planning from "./Planning";

const Eduction = () => {
  let match = useRouteMatch();
  return (
    <div className="educution">
      <div className="bottom">
        <ul>
          <Link to={`${match.url}/founder`}>
            <li>Founder</li>
          </Link>
          <Link to={`${match.url}/idea`}>
            <li>Idea</li>
          </Link>
          <Link to={`${match.url}/formation`}>
            <li>Formation</li>
          </Link>
          <Link to={`${match.url}/planning`}>
            <li>Planning</li>
          </Link>
        </ul>
        Education
      </div>
      <Switch>
        <Route path={`${match.path}/founder`}>
          <Founder />
        </Route>
        <Route path={`${match.path}/idea`}>
          <Idea />
        </Route>
        <Route path={`${match.path}/formation`}>
          <Formation />
        </Route>
        <Route path={`${match.path}/planning`}>
          <Planning />
        </Route>
        <Route path={match.path}>
        <Founder />
        </Route>
      </Switch>
    </div>
  );
};

export default Eduction;
