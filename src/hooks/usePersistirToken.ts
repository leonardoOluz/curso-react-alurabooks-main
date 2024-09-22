function usePersistirToken() {
  return (token: string) => {
    sessionStorage.setItem("token", token);
  };
}

export default usePersistirToken;
