import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Client from "./Components/Client";
import { LinearGradient } from "expo-linear-gradient";
import { primaryGradientArray } from "./Utils/Colors";

class HomeScreen extends React.Component {
  render() {
    let picture = {
      url:
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
    };
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={picture} style={styles.image} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.heading}>TODO LIST</Text>
            <Text style={styles.text}>GET ORGANIZED</Text>
          </View>
          <View style={styles.heading}>
          <Button
            title="Start Here"
            onPress={() => this.props.navigation.navigate("Todo")}
            type="solid"
            paddingTop="40"
            color="white"
          />
          </View>
      </LinearGradient>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Todo: Client
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  overview: {
    padding: 10
  },
  container: {
    flex: 1
  },
  contain: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  image: {
    marginTop: 50,
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 6,
    borderColor: "white",
    paddingBottom: 40
  },
  heading: {
    paddingTop: 130,
    paddingBottom: 40,
    fontSize: 40,
    color: "white"
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 10,
    paddingTop: 20,
    fontSize: 30,
    color: "white"
  },
  bottom: {
    paddingTop: 200
  }
});
