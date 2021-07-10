import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ Component, isAuthenticated, logout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        isAuthenticated ? (
          <Component logout={logout} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }}
    />
  );
};

{
  /* <Redirect to={{pathname:"/",state:{from:props.location}}/> */
}
export { ProtectedRoute };
