import {StyleSheet} from 'react-native';
import {height, scaleFont, verticalScale, width} from './utils';

export const form = StyleSheet.create({
  modalFormContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  formContainer: {
    marginBottom: 40,
    marginVertical: verticalScale(60),
    justifyContent: 'center',
  },
  formVerticalSpacing: {
    marginVertical: 10,
  },
  formBottomSpacing: {
    marginBottom: 10,
  },
  formTopSpacing: {
    marginTop: 10,
  },
  formLabel: {
    color: '#000000',
    fontSize:
      height >= width
        ? scaleFont(14)
        : height <= 400
        ? scaleFont(14)
        : scaleFont(20),
    textAlign: 'left',
  },
  formSubLabel: {
    fontFamily: 'Muli-Regular',
    color: '#434343',
    fontSize:
      height >= width
        ? scaleFont(14)
        : height <= 400
        ? scaleFont(14)
        : scaleFont(20),
    textAlign: 'left',
    paddingBottom: 10,
  },
  formWarning: {
    fontFamily: 'Muli-Bold',
    fontSize:
      height >= width
        ? scaleFont(14)
        : height <= 400
        ? scaleFont(14)
        : scaleFont(20),
    color: '#FF0F0F',
    textAlign: 'left',
    letterSpacing: 0,
    paddingBottom: 10,
  },
  picker: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'solid',
    // color: '#707070',
    borderRadius: 10,
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  dropDownPicker: {
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'solid',
    color: '#707070',
    borderRadius: 10,
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  pickerDisabled: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#BCBCBC',
    borderStyle: 'solid',
    backgroundColor: '#DEDEDE',
    borderRadius: 10,
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },

  textInput: {
    fontFamily: 'Muli-Bold',
    fontSize:
      height >= width
        ? scaleFont(14)
        : height <= 400
        ? scaleFont(14)
        : scaleFont(20),
    borderColor: '#707070',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    color: '#707070',
    width: '100%',
    height: 40,
    padding: 10,
    paddingLeft: 20,
  },
  textInputDisabled: {
    fontFamily: 'Muli-Bold',
    fontSize:
      height >= width
        ? scaleFont(14)
        : height <= 400
        ? scaleFont(14)
        : scaleFont(20),
    borderColor: '#BCBCBC',
    backgroundColor: '#DEDEDE',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    color: '#000',
    width: '100%',
    padding: 10,
    height: 40,
    paddingLeft: 20,
  },
});

export const globalStyles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    // height: height >= width ? '80%' : height >= 400 ? '95%' : '80%',
    // height: '100%',
    backgroundColor: 'rgb(249,249,249)',
    // padding: 20,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    margin: 5,
    backgroundColor: 'rgb(249,249,249)',
  },
});
