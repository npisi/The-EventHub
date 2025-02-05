import { createContext } from "react";
import useOnlineStatus from "../hooks/userOnlineState";

export const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
  const networkStatus = useOnlineStatus;
  return (
    <NetworkContext.Provider>
      {networkStatus ? children : <h1>Offline</h1>}
    </NetworkContext.Provider>
  );
};
