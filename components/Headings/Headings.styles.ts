import { StyleSheet } from 'react-native';
import customFontFamily from '../../assets/fonts';

export const styles = StyleSheet.create({
  title: {
    fontFamily: customFontFamily.fontRalewayMedium,
    fontSize: 28,
  },
  subtitleMedium: {
    fontFamily: customFontFamily.fontRalewayMedium,
    fontSize: 20,
  },
  subtitle: {
    fontFamily: customFontFamily.fontRalewayRegular,
    fontSize: 16,
  },
  body: {
    fontFamily: customFontFamily.fontRalewayRegular,
    fontSize: 14,
  },
  buttonText: {
    fontFamily: customFontFamily.fontRalewayBold,
    fontSize: 14,
  },
  bodySmall: {
    fontFamily: customFontFamily.fontRalewayRegular,
    fontSize: 12,
  },
  fieldOverline: {
    fontFamily: customFontFamily.fontRalewayRegular,
    fontSize: 9,
  },
});