import React, { useEffect } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { SCREENS } from "../../utils";
import { Images } from "../../common/styles/image";
import FastImage from 'react-native-fast-image';

const Splash = ({
  navigation,
}: {
  navigation: { navigate: (screenName: string, params?: {}) => void };
}) => {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREENS.HOME);
    }, 2000);
  }, []);

  return (
    <View style={styles.mainView}>
      <FastImage
        source={Images.splashAnimation}
        style={styles.logoImage}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;
