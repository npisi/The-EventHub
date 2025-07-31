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

const OfflineModal = () => {
  return (
    <div className="modal-overlay" style={{background: "rgba(0,0,0,0.8)"}}>
      <div className="modal-content" style={{textAlign: "center", maxWidth: "400px"}}>
        <div style={{fontSize: "3rem", marginBottom: "20px"}}>📡</div>
        <h2 style={{color: "#ff4444", marginBottom: "15px"}}>You Are Offline</h2>
        <p style={{color: "#666", lineHeight: "1.5"}}>
          Please check your internet connection and try again.
          <br />
          This will automatically close when you're back online.
        </p>
        <div style={{marginTop: "20px", fontSize: "0.9rem", color: "#888"}}>
          🔄 Waiting for connection...
        </div>
      </div>
    </div>
  );
};

export const NetworkProvider = ({ children }) => {
  const networkStatus = UserInternetConn();
  return (
    <NetworkContext.Provider value={networkStatus}>
      {!networkStatus && <OfflineModal />}
      {children}
    </NetworkContext.Provider>
  );
};
