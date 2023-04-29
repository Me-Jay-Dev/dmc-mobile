import {Dimensions, PixelRatio, ToastAndroid} from 'react-native';
import Toast from 'react-native-toast-message';
export const {fontScale, scale} = Dimensions.get('screen');
export const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 912;
const guidelineBaseHeight = 1368;
//const initial = Orientation.getInitialOrientation();
export const windowWidth = Dimensions.get('window').width;
export const windowheight = Dimensions.get('window').height;

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

export const horizontalScale = size =>
  Math.round((windowWidth / guidelineBaseWidth) * size);
export const verticalScale = size =>
  Math.round((windowheight / guidelineBaseHeight) * size);

export const toastAlert = ({
  type,
  message,
  toastDuration = ToastAndroid.SHORT,
  toastPosition = ToastAndroid.BOTTOM,
}) => {
  Toast.show({
    type: type,
    text1: message,
  });
};
