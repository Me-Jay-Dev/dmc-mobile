import {Dimensions, PixelRatio, ToastAndroid} from 'react-native';
const {fontScale, scale, width} = Dimensions.get('screen');

export const scaleFont = fontSize => {
  const scaledFontScale = fontScale > 1 ? 1 + 1 * 0.1 : 1;
  return (
    (PixelRatio.getPixelSizeForLayoutSize(fontSize) * scaledFontScale) / scale
  );
};

export const fixedFont = fontSize => {
  // unaffected by phone font setting
  const setScale = fontScale > 1 ? 0.8 : 1;
  return (PixelRatio.getPixelSizeForLayoutSize(fontSize) * setScale) / scale;
};
