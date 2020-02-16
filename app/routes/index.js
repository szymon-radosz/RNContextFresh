import { createAppContainer } from "react-navigation";
import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import Welcome from "../components/Welcome/Welcome";
//@ts-ignore
import { fadeIn } from "react-navigation-transitions";
import { GlobalContext } from "./../Context/GlobalContext";
import NavigationService from "./NavigationService";
import { ifIphoneX } from "react-native-iphone-x-helper";

import { createStackNavigator } from 'react-navigation-stack';

const MainStack = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
  },
  {
    initialRouteName: "Welcome",
    transitionConfig: () => fadeIn(),
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(MainStack);

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      alertMessage: "",
      alertType: "",
      API_URL: "http://127.0.0.1:8080/",
      //API_URL: "http://10.0.2.2:8000/",
      //API_URL: "https://e-mamy.pl/",
      showLoader: false,
    };
  }

  setShowLoader = (param) => {
    this.setState({
      showLoader: param
    });
  };

  setAlert = (
    showAlert,
    alertType,
    alertMessage
  ) => {
    this.setState({
      showAlert: showAlert,
      alertType: alertType,
      alertMessage: alertMessage
    });
  };

  closeAlert = () => {
    this.setState({
      showAlert: false,
      alertType: "",
      alertMessage: ""
    });
  };

  componentDidMount = async () => {
    NavigationService.navigate("Welcome", {});
  };

  render() {
    const {
      showAlert,
      alertType,
      alertMessage,
      API_URL,
      showLoader,
    } = this.state;

    return (
      <GlobalContext.Provider
        value={{
          showAlert: showAlert,
          alertType: alertType,
          alertMessage: alertMessage,
          setAlert: this.setAlert,
          API_URL: API_URL,
          showLoader: showLoader,
          setShowLoader: this.setShowLoader,
          closeAlert: this.closeAlert,
          //@ts-ignore
          NavigationService: NavigationService
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#5e88fc"
          }}
        >
          {/*<StatusBar backgroundColor="#f4a157" barStyle="light-content" />*/}
          <AppContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
            alertType={alertType}
            alertMessage={alertMessage}
            closeAlert={this.closeAlert}
            showAlert={showAlert}
          />
        </SafeAreaView>
      </GlobalContext.Provider>
    );
  }
}
