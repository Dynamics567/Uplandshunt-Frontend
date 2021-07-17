// const ROOT_URL = "https://secret-hamlet-03431.herokuapp.com";
const ROOT_URL = "https://uplandshut.herokuapp.com/v1/";

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetch(`${ROOT_URL}/auth/login`, requestOptions);
    let data = await response.json();
    console.log(data);

    if (data.user) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data,
      });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }

    // dispatch({ type: "LOGIN_ERROR", error: data.errors });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}

export async function registerUser(dispatch, registerPayload) {
  const registerOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerPayload),
  };

  try {
    dispatch({ type: "REQUEST_REGISTER" });
    let response = await fetch(`${ROOT_URL}/auth/register`, registerOptions);
    let data = await response.json();
    console.log(data);

    if (data.status === true) {
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: data,
      });
    }

    dispatch({ type: "REGISTER_ERROR", error: data.data });
    return;
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", error: error });
  }
}
