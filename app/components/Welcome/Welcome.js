import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Dimensions
} from "react-native";
//@ts-ignore
import { GlobalContext } from "./../../Context/GlobalContext";
// import {
//   customBlueColor,
//   fontSizeBig,
//   peachBtnText
// } from "../../assets/global/globalStyles";

const fullWidth = Dimensions.get("window").width;
const fullHeight = Dimensions.get("window").height;

// const logo = require("./../../assets/images/logo-sq.png");
// const friends = require("./../../assets/images/friends.png");
// const support = require("./../../assets/images/support.png");
// const like = require("./../../assets/images/like.png");

const Welcome = (props) => {
  const context = useContext(GlobalContext);

  const navigation = props.navigation;

  return (
    <SafeAreaView>
      <View>
        <Text>test</Text>
        
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   welcomeSliderPagination: {
//     marginTop: 30,
//     marginBottom: 30
//   },
//   activeWelcomeSlideRect: {
//     backgroundColor: customBlueColor,
//     width: 35,
//     marginTop: 100
//   },
//   inActiveWelcomeSlideRect: {
//     backgroundColor: "#e5e5e5",
//     width: 15,
//     marginTop: 100
//   },
//   welcomeSlide: {
//     justifyContent: "space-around",
//     alignItems: "center",
//     height: fullHeight / 1.8
//   },
//   welcomeSlideText: {
//     fontSize: 22,
//     color: "#424242",
//     textAlign: "center",
//     fontWeight: "300",
//     fontFamily: "Open Sans",
//     marginBottom: 80,
//     width: "70%"
//   },
//   fullWidth: fullWidth,
//   logo: {
//     textAlign: "center",
//     color: "#333",
//     fontWeight: "800",
//     fontSize: fontSizeBig,
//     paddingBottom: 10
//   },
//   subBtn: {
//     color: "#5e88fc",
//     textAlign: "center",
//     fontSize: 16,
//     fontFamily: "Open Sans"
//   },
//   peachBtnText: peachBtnText,
//   registerBtn: { marginBottom: 50 },
//   sliderImg: { maxWidth: 120 },
//   areaContainer: {
//     flex: 1,
//     backgroundColor: "#fff"
//   }
// });

export default Welcome;
