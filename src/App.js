import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { ProtectedRoute } from "./Auth/ProtectedRoute";
// import routes from "./Config/routes";
import { AuthProvider } from "./Context";

import {
  IndividualSignup,
  ResetPassword,
  Login,
  PasswordRecovery,
  Landing,
  DashboardLogin,
  Blog,
  Regulations,
  News,
  SingleNews,
  SingleBlog,
  SingleRegulation,
  ContactUs,
  About,
  PrivacyPolicy,
  TermsAndConditions,
  Dashboard,
  BusinessSignup,
  ActivateAccount,
} from "./pages";

function App() {
  return (
    <div className="overflow-hidden">
      <AuthProvider>
        <Router>
          <Switch>
            <div className="">
              <Route path="/" exact component={Landing} />
              <Route path="/register" exact component={IndividualSignup} />
              <Route
                path="/businessRegister"
                exact
                component={BusinessSignup}
              />
              <Route
                path="/resetpassword/:token"
                exact
                component={ResetPassword}
              />
              <Route path="/login" exact component={Login} />
              <Route path="/contactus" exact component={ContactUs} />
              <Route
                path="/forgotpassword"
                exact
                component={PasswordRecovery}
              />
              <Route path="/dashboardlogin" exact component={DashboardLogin} />
              <Route path="/legal/news" component={News} />
              <Route path="/about" exact component={About} />
              <Route
                path="/activateaccount"
                exact
                component={ActivateAccount}
              />
              <Route path="/privacypolicy" exact component={PrivacyPolicy} />
              <Route path="/terms" exact component={TermsAndConditions} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <Route path="/legal/regulations" exact component={Regulations} />
              <Route path="/legal/blog" exact component={Blog} />
              <Route path="/legal/newsview" exact component={SingleNews} />
              <Route path="/legal/blogview" component={SingleBlog} />
              <Route
                path="/legal/regulationview"
                exact
                component={SingleRegulation}
              />
            </div>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
