import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { AuthProvider } from "@/context/AuthContext";

import "./i18n";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//     },
//   },
// });

// const asyncStoragePersister = createAsyncStoragePersister({
//   storage: AsyncStorage,
// });

export default function RootLayout() {
  return (
    // <PersistQueryClientProvider
    //   client={queryClient}
    //   persistOptions={{ persister: asyncStoragePersister }}
    // >
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
        <Stack.Screen name="pincode" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
    // </PersistQueryClientProvider>
  );
} 
