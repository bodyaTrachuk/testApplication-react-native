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
import AccountImage from "../../src/components/common/svg/AccountImage";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import icons from "@/constants/icons";
import styles from "@/styles/signUpStyle";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

import i18n from "../i18n";
import { AuthContext } from "@/context/AuthContext";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const index = () => {
  const authContext = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    authContext?.signUp(data.name, data.email, data.password);
  };
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.arrowIcon}>
        <Image source={icons.greyArrowAgle} />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <AccountImage />
        <View>
          <Text>{t("sign up")}</Text>
          <Text>{t("personal account")}</Text>
        </View>
      </View>
      <View style={styles.textInput}>
        <Text style={styles.label}>{t("name")}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{5,64}$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={errors.name ? styles.inputError : styles.input}>
              <TextInput
                placeholder={t("name")}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="default"
              />
              {errors.name ? (
                <View>
                  <Image
                    source={icons.errorInput}
                    style={
                      ["en", "jp", "ua"].includes(i18n.language)
                        ? styles.InputIconRight
                        : styles.InputIconLeft
                    }
                  />
                </View>
              ) : (
                <></>
              )}
            </View>
          )}
          name="name"
        />
        {errors.name && (
          <Text style={styles.labelError}>{t("name is required")}</Text>
        )}

        <Text style={styles.label}>{t("email")}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={errors.name ? styles.inputError : styles.input}>
              <TextInput
                placeholder={t("email")}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
              />
              {errors.name ? (
                <View>
                  <Image
                    source={icons.errorInput}
                    style={
                      ["en", "jp", "ua"].includes(i18n.language)
                        ? styles.InputIconRight
                        : styles.InputIconLeft
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
        {errors.email && (
          <Text style={styles.labelError}>{t("email is required")}</Text>
        )}

        <Text style={styles.label}>{t("password")}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<> ]{8,64}$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={errors.name ? styles.inputError : styles.input}>
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
                      ? styles.InputIconRight
                      : styles.InputIconLeft
                  }
                />
              </Pressable>
            </View>
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.labelError}>{t("password is required")}</Text>
        )}
      </View>
      <View style={styles.submitButton}>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonSignUpText}>{t("continue")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;
