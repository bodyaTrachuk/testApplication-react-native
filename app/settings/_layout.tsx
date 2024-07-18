import { Stack } from "expo-router";

export default function Settings() {
  return (
    <Stack> 
      <Stack.Screen name="settings" options={{ headerShown: false }} />
    </Stack>
  );
} 
