import { createStackNavigator } from "react-navigation";
import LoginScreen from "../Components/Login";
import ListScreen from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CartScreen from "../Components/CoffeeCart";

const StackScreens = createStackNavigator(
  {
    login: LoginScreen,
    List: ListScreen,
    Detail: CoffeeDetail,
    Cart: CartScreen
  },
  {
    initialRouteName: "login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      },
      cardStyle: "rgb(20,90,100)"
    }
  }
);

export default StackScreens;
