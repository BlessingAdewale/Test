import { useEffect, useState } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  } from '@expo-google-fonts/poppins';

export const useFontsHelper = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
            Poppins_300Light,
            Poppins_300Light_Italic,
            Poppins_400Regular,
            Poppins_400Regular_Italic,
            Poppins_500Medium,
            Poppins_500Medium_Italic,
            Poppins_600SemiBold,
            Poppins_600SemiBold_Italic,
            Poppins_700Bold,
            Poppins_700Bold_Italic,
            Poppins_800ExtraBold,
            Poppins_800ExtraBold_Italic,
            Poppins_900Black,
            Poppins_900Black_Italic,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    async function removeSplashScreen() {
      if (appIsReady) await SplashScreen.hideAsync();
    }
    removeSplashScreen();
  }, [appIsReady]);

  return { appIsReady };
};
