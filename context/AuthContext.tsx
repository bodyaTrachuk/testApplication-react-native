import React, { createContext, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

interface UserProps {
  name: string;
  email: string;
  password: string;
  pin?: string;
}

interface AuthContextTypeProps {
  user: UserProps | null;
  isLogged: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  setPin: (pin: string) => Promise<void>;
  signOut: () => Promise<void>;
  confirmPin: (pin: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextTypeProps | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  const signUp = async (name: string, email: string, password: string) => {
    if (!name || !email || !password) {
      alert("Please provide name, email, and password");
      return;
    }
    try {
      const newUser: UserProps = { name, email, password };
      await AsyncStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      setIsLogged(true);
      router.replace("/pincode");
    } catch (error) {
      console.error("Failed to sign up:", error);
      alert("An error occurred during sign up. Please try again.");
    }
  };

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      alert("Please provide both email and password");
      return;
    }
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        const parsedUser: UserProps = JSON.parse(storedUser);
        if (parsedUser.email === email && parsedUser.password === password) {
          setUser(parsedUser);
          setIsLogged(true);
          router.replace("/pincode");
        } else {
          alert("Invalid email or password");
          router.replace("/");
        }
      } else {
        alert("No user found. Please sign up.");
        router.replace("/");
      }
    } catch (error) {
      console.error("Failed to sign in:", error);
      alert("An error occurred during sign in. Please try again.");
    }
  };

  const signOut = async () => {
    try {
      // await AsyncStorage.removeItem("user");
      // setUser(null);
      setIsLogged(false);
      router.replace("/");
    } catch (error) {
      console.error("Failed to sign out:", error);
      alert("An error occurred during sign out. Please try again.");
    }
  };

  const setPin = async (pin: string) => {
    if (!pin) {
      alert("Please provide a PIN");
      return;
    }
    try {
      if (user) {
        const updatedUser = { ...user, pin };
        await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        router.replace("/home");
      }
    } catch (error) {
      console.error("Failed to set PIN:", error);
      alert("An error occurred while setting the PIN. Please try again.");
    }
  };

  const confirmPin = async (pin: string) => {
    if (!pin) {
      alert("Please provide the PIN");
      return;
    }
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        const parsedUser: UserProps = JSON.parse(storedUser);
        if (parsedUser.pin === pin) {
          setUser(parsedUser);
          setIsLogged(true);
          router.replace("/home");
        } else {
          alert("Invalid PIN");
        }
      } else {
        alert("No user found. Please sign up.");
      }
    } catch (error) {
      console.error("Failed to confirm PIN:", error);
      alert("An error occurred during PIN confirmation. Please try again.");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLogged, signIn, signUp, setPin, signOut, confirmPin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
