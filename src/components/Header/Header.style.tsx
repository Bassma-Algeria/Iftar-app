import {StyleSheet} from 'react-native';

import {SPACING} from '../../theme/Spacings';

const FONTS = {
  regular: 'Cairo-Regular',
  medium: 'Cairo-Medium',
  semibold: 'Cairo-SemiBold',
  bold: 'Cairo-Bold',
  extraBold: 'Cairo-ExtraBold',
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: FONTS.bold,
    fontSize: SPACING.larger,
  },

  h2: {
    fontFamily: FONTS.bold,
    fontSize: SPACING.large,
  },

  h3: {
    fontFamily: FONTS.semibold,
    fontSize: SPACING.xxl,
  },

  h4: {
    fontFamily: FONTS.regular,
    fontSize: SPACING.xl,
  },

  h5: {
    fontFamily: FONTS.regular,
    fontSize: 18,
  },

  h6: {
    fontFamily: FONTS.regular,
    fontSize: 16,
  },
});

export {styles, FONTS};
