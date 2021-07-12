import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { ProtectedRoute } from "./Auth/ProtectedRoute";
import routes from "./Config/routes";
import { AuthProvider } from "./Context";
import { Dashboard } from "./pages";

// import {
//   IndividualSignup,
//   ResetPassword,
//   Login,
//   PasswordRecovery,
//   Landing,
//   DashboardLogin,
//   Blog,
//   Regulations,
//   News,
//   SingleNews,
//   SingleBlog,
//   SingleRegulation,
//   ContactUs,
//   About,
//   PrivacyPolicy,
//   TermsAndConditions,
//   Dashboard,
// } from "./pages";

function App() {
  return (
    <div className="overflow-hidden">
      <AuthProvider>
        <Router>
          {/* <Switch> */}
          {routes.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
          {/* </Switch> */}
        </Router>
      </AuthProvider>
      <AuthProvider>
        <Router>
          <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
