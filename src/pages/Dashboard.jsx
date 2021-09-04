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
  EditDetails,
  BidsRecieved,
  BidsPlaced,
  InterestSent,
  AddNewListing,
  PropertyRequestDocument,
  PaymentHistory,
  PropertyPurchased,
  PropertySold,
  AllSavedProperties,
  EditIndividualProfile,
  EditBusinessProfile,
  ImageUpload,
  DocumentUpload,
  RequestProperty,
  ViewBidsPropertyRequest,
  BidsSent,
  UserSubscription,
  AllProperties,
  Transactions,
  UpdateDocument,
} from "../pages";

const Dashboard = () => {
  return (
    <div className="flex min-w-full">
      <Router>
        <div className="flex-none">
          <Sidebar />
        </div>

        <div className="min-h-screen inner-layout ml-64 relative">
          <DashboardHeader />
          <Switch>
            <Route path="/dashboard" exact component={Notification} />
            <Route path="/dashboard/listings" exact component={Listings} />
            <Route
              path="/dashboard/listings/add"
              exact
              component={AddNewListing}
            />
            <Route
              path="/dashboard/listings/imageUpload/:id"
              component={ImageUpload}
            />
            <Route
              path="/dashboard/listings/documentUpload/:id"
              component={DocumentUpload}
            />
            <Route
              path="/dashboard/listings/documentUpdate/:id"
              component={UpdateDocument}
            />
            <Route
              path="/dashboard/listings/editDetails/:id"
              exact
              component={EditDetails}
            />
            <Route
              path="/dashboard/listings/userview/:id"
              exact
              component={UserView}
            />
            <Route
              path="/dashboard/listings/documents/:id"
              exact
              component={Documents}
            />
            <Route
              path="/dashboard/listings/bidsReceived/:id"
              exact
              component={BidsRecieved}
            />
            <Route
              path="/dashboard/listings/bidsSent/:id"
              exact
              component={BidsSent}
            />
            {/* <Route
              path="/dashboard/listings"
              exact
              component={EditNewListing}
            /> */}
            <Route
              path="/dashboard/savedProperty"
              exact
              component={SavedProperty}
            />
            <Route
              path="/dashboard/savedProperty/allProperties"
              exact
              component={AllProperties}
            />
            <Route
              path="/dashboard/savedProperty/allSavedProperties"
              exact
              component={AllSavedProperties}
            />
            <Route
              path="/dashboard/request/propertyRequest"
              exact
              component={PropertyRequest}
            />
            <Route
              path="/dashboard/request/requestProperty"
              exact
              component={RequestProperty}
            />
            <Route
              path="/dashboard/request/bidsPlaced"
              exact
              component={BidsPlaced}
            />
            <Route
              path="/dashboard/request/bidsPlaced/viewbids/:id"
              exact
              component={ViewBidsPropertyRequest}
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
              path="/dashboard/purchase/propertySold"
              exact
              component={PropertySold}
            />
            <Route
              path="/dashboard/purchase/paymentHistory"
              exact
              component={PaymentHistory}
            />
            <Route path="/dashboard/profile" exact component={Profile} />
            <Route
              path="/dashboard/editindividualprofile"
              exact
              component={EditIndividualProfile}
            />
            <Route
              path="/dashboard/editbusinessprofile"
              exact
              component={EditBusinessProfile}
            />
            <Route
              path="/dashboard/subscription"
              exact
              component={UserSubscription}
            />
            <Route
              path="/dashboard/subscription/upgradeSub"
              exact
              component={Subscription}
            />
            <Route
              path="/dashboard/transactions"
              exact
              component={Transactions}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export { Dashboard };
