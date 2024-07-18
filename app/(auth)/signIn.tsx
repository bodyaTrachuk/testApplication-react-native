import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import svgComponets from "@/constants/svgComponets";
import icons from "@/constants/icons";
import styles from "@/styles/signInStyle";

interface FormData {
  email: string;
  password: string;
}

const index = () => {
  const authContext = useContext(AuthContext);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    authContext?.signIn(data.email, data.password);
  };

  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.arrowIcon}>
        <Image source={icons.greyArrowAgle} />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <svgComponets.AccountImage />
        <View>
          <Text>{t("login")}</Text>
          <Text>{t("personal account")}</Text>
        </View>
      </View>
      <View style={styles.textInput}>
        {errors.email || errors.password ? (
          <Text style={styles.labelError}>
            {t("Error: Invalid E-mail or Password")}
          </Text>
        ) : (
          <></>
        )}
        <Text style={styles.label}>{t("email")}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={errors.email ? styles.inputError : styles.input}>
              <TextInput
                placeholder={t("email")}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
              />
              {errors.email ? (
                <View>
                  <Image
                    source={icons.errorInput}
                    style={
                      ["en", "jp", "ua"].includes(i18n.language)
                        ? styles.InputIconEng
                        : styles.InputIconArab
                    }
                  />
                </View>
              ) : (
                <></>
              )}
            </View>
          )}
          name="email"
        />

        <Text style={styles.label}>{t("password")}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<> ]{8,64}$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={errors.password ? styles.inputError : styles.input}>
              <TextInput
                placeholder={t("password")}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="default"
                secureTextEntry={!isPasswordVisible}
              />

              <Pressable
                onPressIn={() => setPasswordVisible(!isPasswordVisible)}
                onPressOut={() => setPasswordVisible(!isPasswordVisible)}
              >
                <Image
                  source={
                    errors.password
                      ? icons.errorHidenPasswordEye
                      : icons.hidenPasswordEye
                  }
                  style={
                    ["en", "jp", "ua"].includes(i18n.language)
                      ? styles.InputIconEng
                      : styles.InputIconArab
                  }
                />
              </Pressable>
            </View>
          )}
          name="password"
        />
      </View>
      <View style={styles.submitButton}>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonSignUpText}>{t("continue")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignIn}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonSignInText}>{t("create account")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;
