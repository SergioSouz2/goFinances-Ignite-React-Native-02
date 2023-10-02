import React from "react";

import { StatusBar, View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { Dashboard } from "./src/screens/Dashboard/Dashboard";

import theme from "./src/global/styles/theme";
import {
   useFonts,
   Poppins_400Regular,
   Poppins_500Medium,
   Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

export default function App() {
   const [fontLoaded] = useFonts({
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_700Bold,
   });

   if (!fontLoaded) {
      return <AppLoading />;
   }
   return (
      <ThemeProvider theme={theme}>
         <StatusBar
            barStyle={"light-content"}
            backgroundColor={theme.colors.primary}
         />
         <Dashboard />
      </ThemeProvider>
   );
}
