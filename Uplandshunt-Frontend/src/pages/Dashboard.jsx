import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DashboardHeader, Sidebar } from "../molecules";
import { EditNewListing } from "../organisms";
import {
  Listings,
  Notification,
  Subscription,
  Profile,
  PropertyRequest,
  SavedProperty,
  MyPurchase,
} from "../pages";

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
            <Route path="/dashboard/profile" exact component={Profile} />
            <Route path="/dashboard/purchase" exact component={MyPurchase} />
            <Route
              path="/dashboard/listings"
              exact
              component={EditNewListing}
            />
            <Route
              path="/dashboard/savedProperty"
              exact
              component={SavedProperty}
            />
            <Route
              path="/dashboard/request"
              exact
              component={PropertyRequest}
            />
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
