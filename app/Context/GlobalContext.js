import React from "react";

export const GlobalContext = React.createContext({
  showAlert: false,
  alertType: "",
  alertMessage: "",
  API_URL: "",
  setAlert: (
    showAlert,
    alertType,
    alertMessage
  ) => {},
  closeAlert: () => {},
  showLoader: false,
  setShowLoader: (param) => {},
  NavigationService: () => {}
});
