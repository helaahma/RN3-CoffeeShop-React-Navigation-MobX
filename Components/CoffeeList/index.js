import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeStore from "../../store/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";
import CardHeader from "./CardHeader";

const CoffeeList = ({ navigation }) => {
  const { cafes } = coffeeStore;
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => (
      <CoffeeItem cafe={cafe} key={cafe.id} navigation={navigation} />
    ));
  }
  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};
CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerLeft: null,
  headerRight: <CardHeader />
};
export default observer(CoffeeList);
