export default authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { "x-access-token": token };
  } else {
    return {};
  }
};
