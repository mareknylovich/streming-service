import io from "socket.io-client";

import "./assets/css/bootstrap.min.css";
import "./assets/css/layout.css";
import "./assets/css/App.css";

import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter";
import LandingPage from "./pages/LandingPage/LandingPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);

    const ref = urlSearchParams.get("ref");
    const service = 1;

    const socket = io(process.env.REACT_APP_API, { withCredentials: false });

    if (ref) {
      localStorage.setItem("ref", ref);

      socket.emit("PAYMENT_NOTIFICATION", {
        type: "VISIT",
        telegramId: ref,
        service,
      });
    }
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className="AppMain">
        <LandingPage />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
