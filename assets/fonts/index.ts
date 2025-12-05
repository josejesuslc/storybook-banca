import { Platform } from 'react-native';

const customFontFamily = Platform.select({
  ios: {
    fontRalewayRegular: 'Raleway-Regular',
    fontRalewayMedium: 'Raleway-Medium',
    fontRalewayLight: 'Raleway-Light',
    fontRalewayBold: 'Raleway-Bold',
  },
  android: {
    fontRalewayRegular: 'Raleway_400Regular',
    fontRalewayMedium: 'Raleway_500Medium',
    fontRalewayLight: 'Raleway_300Light',
    fontRalewayBold: 'Raleway_700Bold',
  },
  web: {
    fontRalewayRegular: 'Raleway-Regular',
    fontRalewayMedium: 'Raleway-Medium',
    fontRalewayLight: 'Raleway-Light',
    fontRalewayBold: 'Raleway-Bold',
  },
}) ?? {
  fontRalewayRegular: 'system font',
  fontRalewayMedium: 'system font',
  fontRalewayLight: 'system font',
  fontRalewayBold: 'system font',
};

export type CustomFontFamilyType = {
  fontRalewayRegular: string;
  fontRalewayMedium: string;
  fontRalewayLight: string;
  fontRalewayBold: string;
};

export default customFontFamily;
