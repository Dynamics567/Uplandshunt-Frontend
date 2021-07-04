import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DashboardHeader, Sidebar } from "../molecules";
import { Listings, Notification, Subscription } from "../pages";

const Dashboard = () => {
  return (
    <div className="flex">
      <Router>
        <div className="flex-none">
          <Sidebar />
        </div>

        <div className="flex-grow w-full">
          <DashboardHeader />
          <Switch>
            <Route path="/dashboard" exact component={Notification} />
            <Route path="/dashboard/listings" exact component={Listings} />
            <Route
              path="/dashboard/subscription"
              exact
              component={Subscription}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export { Dashboard };
