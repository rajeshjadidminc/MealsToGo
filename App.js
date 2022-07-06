import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestuarantsScreen } from "./src/features/restaurants/screens/resturants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "./src/components/typography/text.component";
import { SafeAreaViewMain } from "./src/components/utility/safe-area-component";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { RestuarntContextProvider } from "./src/services/restaurants/restaurants.context";
import { Colors } from "react-native-paper";
import { LocationContextProvider } from "./src/services/location/location.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  const TAB_ICON = {
    Restuarants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      headerShown: false,
      tabBarActiveTintColor: Colors.red800,
      tabBarInactiveTintColor: "gray",
      tabBarStyle: [
        {
          display: "flex",
        },
        null,
      ],
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };

  const Settings = () => (
    <SafeAreaViewMain>
      <Text>Settings</Text>
    </SafeAreaViewMain>
  );
  const Map = () => (
    <SafeAreaViewMain>
      <Text>Map</Text>
    </SafeAreaViewMain>
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestuarntContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restuarants" component={RestuarantsScreen} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestuarntContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
