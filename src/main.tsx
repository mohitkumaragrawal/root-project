import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FirebaseProvider } from "./context/Firebase.tsx";
import { ContactPopupContextProvider } from "./context/contact-popup-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FirebaseProvider>
      <ContactPopupContextProvider>
        <App />
      </ContactPopupContextProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
