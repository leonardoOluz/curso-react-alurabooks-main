function useLimparToken() {
  return () => {
    return sessionStorage.removeItem("token");
  };
}

export default useLimparToken;
