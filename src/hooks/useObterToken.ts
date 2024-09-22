function useObterToken() {
  return ()=> {
    return sessionStorage.getItem("token");
  };
}

export default useObterToken;