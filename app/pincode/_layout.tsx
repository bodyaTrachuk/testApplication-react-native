import { Stack } from "expo-router";

export default function Pincode() {
  return (
    <Stack> 
      <Stack.Screen name="pincode" options={{ headerShown: false }} />
    </Stack>
  );
} 
