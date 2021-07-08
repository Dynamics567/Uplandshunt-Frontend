import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DashboardHeader, Sidebar } from "../molecules";
import {
  Listings,
  Notification,
  Subscription,
  Profile,
  PropertyRequest,
  SavedProperty,
  MyPurchase,
  Documents,
  UserView,
  ManageDetails,
  InterestRecieved,
  BidsPlaced,
  InterestSent,
  EditNewListing,
  PropertyRequestDocument,
  PaymentHistory,
  PropertyPurchased,
  PropertyRented,
  AllSavedProperties,
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
            <Route path="/dashboard/profile" exact component={Profile} />
            <Route path="/dashboard/listings" exact component={Listings} />
            <Route
              path="/dashboard/listings/edit"
              exact
              component={EditNewListing}
            />
            <Route
              path="/dashboard/listings/manageDetails"
              exact
              component={ManageDetails}
            />
            <Route
              path="/dashboard/listings/userview"
              exact
              component={UserView}
            />
            <Route
              path="/dashboard/listings/documents"
              exact
              component={Documents}
            />
            <Route
              path="/dashboard/listings/interest"
              exact
              component={InterestRecieved}
            />
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
              path="/dashboard/savedProperty/allSavedProperties"
              exact
              component={AllSavedProperties}
            />
            <Route
              path="/dashboard/request"
              exact
              component={PropertyRequest}
            />
            <Route
              path="/dashboard/request/bidsPlaced"
              exact
              component={BidsPlaced}
            />
            <Route
              path="/dashboard/request/interestSent"
              exact
              component={InterestSent}
            />
            <Route
              path="/dashboard/request/documents"
              exact
              component={PropertyRequestDocument}
            />
            <Route path="/dashboard/purchase" exact component={MyPurchase} />
            <Route
              path="/dashboard/purchase/propertyPurchased"
              exact
              component={PropertyPurchased}
            />
            <Route
              path="/dashboard/purchase/propertyRented"
              exact
              component={PropertyRented}
            />
            <Route
              path="/dashboard/purchase/paymentHistory"
              exact
              component={PaymentHistory}
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
