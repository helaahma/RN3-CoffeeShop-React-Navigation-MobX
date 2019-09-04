import React from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

function CardHeader({ navigation }) {
  return (
    <Icon
      type="FontAwesome"
      name="cart-plus"
      onPress={() => navigation.navigate("Cart")}
    />
  );
}
export default withNavigation(CardHeader);
