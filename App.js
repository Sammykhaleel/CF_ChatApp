import Login from "./components/Login";
import Chat from "./components/Chat";
// Import React Navigation
import { createStackNavigator, createAppContainer } from "react-navigation";
// Create the navigator
// export default createStackNavigator({
//   Login: Login,
//   Chat: Chat
// });

const RootStack = createStackNavigator({
  Login: { screen: Login },
  Chat: { screen: Chat }
});

const App = createAppContainer(RootStack);

export default App;
