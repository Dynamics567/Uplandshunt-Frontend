import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, path, ...rest }) => {
  const getToken = localStorage.getItem("currentUser");

  return (
    <Route
      path={path}
      render={(props) =>
        !Boolean(getToken) ? (
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
