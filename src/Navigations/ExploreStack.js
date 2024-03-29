import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

import Explore from "../Screens/Explore";
import PostDetails from "../Screens/PostDetails";
import PostList from "../Screens/PostList";
import UserProfile from "../Screens/UserProfile";
import { colors } from "../Theme/colors";

const Stack = createNativeStackNavigator();

const ExploreStack = ({ navigation, route }) => {
  useLayoutEffect(() => {
    if (getFocusedRouteNameFromRoute(route) == "PostDetails") {
      navigation.setOptions({
        tabBarStyle: {
          display: "none",
        },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: { display: "flex", backgroundColor: colors.background },
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{ title: "Explore" }}
      />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen
        name="PostList"
        component={PostList}
        options={{ title: "Posts" }}
      />
    </Stack.Navigator>
  );
};

export default ExploreStack;
