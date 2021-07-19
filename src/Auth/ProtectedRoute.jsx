import { Route, Redirect } from "react-router-dom";

import { useAuthState } from "../Context";

const ProtectedRoute = ({ component: Component, path, ...rest }) => {
  const userDetails = useAuthState();
  return (
    <Route
      path={path}
      render={(props) =>
        !Boolean(userDetails.token) ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};
export { ProtectedRoute };
