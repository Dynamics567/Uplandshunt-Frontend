import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
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
} from "./pages";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Switch>
          <div className="">
            <Route path="/" exact component={Landing} />
            <Route path="/register" exact component={IndividualSignup} />
            <Route path="/resetpassword" exact component={ResetPassword} />
            <Route path="/login" exact component={Login} />
            <Route path="/forgotpassword" exact component={PasswordRecovery} />
            <Route path="/dashboardlogin" exact component={DashboardLogin} />
            <Route path="/legal/news" exact component={News} />
            <Route path="/legal/regulations" exact component={Regulations} />
            <Route path="/legal/blog" exact component={Blog} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
