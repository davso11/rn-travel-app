import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "@/global.css";

function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="destinations/[id]" />
      </Stack>
    </SafeAreaProvider>
  );
}

export default RootLayout;
