import { Stack } from "expo-router";
import "@/global.css";

function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="destinations/[id]" />
    </Stack>
  );
}

export default RootLayout;
