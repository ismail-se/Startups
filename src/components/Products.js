import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Accelaration from "./Accelaration";
import AppsAndServices from "./AppsAndServices";
import BenifitsAndDeals from "./BenifitsAndDeals";
import Bootcamp from "./Bootcamp";
import Coaching from "./Coaching";

const Products = () => {
  let match = useRouteMatch();
  return (
    <div>
      <div className="bottom">
        <ul>
          <Link to={`${match.url}/apps-and-services`}>
            <li>Apps and Services</li>
          </Link>
          <Link to={`${match.url}/benifits-and-deals`}>
            <li>Benifits & Deals</li>
          </Link>
          <Link to={`${match.url}/bootcamp`}>
            <li>Bootcamp</li>
          </Link>
          <Link to={`${match.url}/coaching`}>
            <li>Coaching</li>
          </Link>
          <Link to={`${match.url}/accelaration`}>
            <li>Accelaration</li>
          </Link>
        </ul>
      </div>

      <Switch>
        <Route path={`${match.path}/apps-and-services`}>
          <AppsAndServices />
        </Route>
        <Route path={`${match.path}/benifits-and-deals`}>
          <BenifitsAndDeals />
        </Route>
        <Route path={`${match.path}/bootcamp`}>
          <Bootcamp />
        </Route>
        <Route path={`${match.path}/coaching`}>
          <Coaching />
        </Route>
        <Route path={`${match.path}/accelaration`}>
          <Accelaration />
        </Route>
        <Route path={match.path}>
        <AppsAndServices />
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
