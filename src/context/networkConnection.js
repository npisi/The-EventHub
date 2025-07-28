import { createContext, useState, useEffect } from "react";

export const NetworkContext = createContext();

const UserInternetConn = () => {
  const [onlineState, setOnlineState] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineState(true);
    });

    window.addEventListener("offline", () => {
      setOnlineState(false);
    });
  }, []);

  return onlineState;
};

export const NetworkProvider = ({ children }) => {
  const networkStatus = UserInternetConn();
  return (
    <NetworkContext.Provider value={networkStatus}>
      {!networkStatus && <div>You Are Offline</div>}
      {children}
    </NetworkContext.Provider>
  );
};
