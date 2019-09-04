import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

// Store
import coffeeStore from "../../store/coffeeStore";
import CardHeader from "../CoffeeList/CardHeader";

class CoffeeDetail extends Component {
  state = {
    drink: "Cappuccino",
    option: "Small"
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  render() {
    // const cafeID = this.props.navigation.getParam("cafeID");
    // let cafe = coffeeStore.cafes.find(cafe => cafe.id === cafeID);
    // if (!cafe) return <Content />;

    const { cafes } = coffeeStore;
    if (!cafes) return <Content />;
    const cafeID = this.props.navigation.getParam("cafeID");
    const cafe = cafes.find(cafe => cafe.id === cafeID);
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {cafe.name + "\n"}
                <Text note>{cafe.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: cafe.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}
CoffeeDetail.navigationOptions = () => {
  title: this.props.navigation.getParam("name");
};
CoffeeDetail.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("name"),
    headerRight: <CardHeader />
  };
};

export default observer(CoffeeDetail);
