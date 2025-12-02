export const getBearerToken = () => {
  try {
    return JSON.parse(localStorage.getItem("jwt_token")!)
      ? JSON.parse(localStorage.getItem("jwt_token")!).access_token
      : null;
  } catch (err) {
    return null;
  }
};