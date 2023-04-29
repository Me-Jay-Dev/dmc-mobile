import {
  Dimensions,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {height, scaleFont, width} from '../../utils/utils';
import RNPickerSelect from 'react-native-picker-select-gian';

const CustomModal = props => {
  useEffect(() => {
    console.log('props.isOpen', props.isOpen);
  }, [props.isOpen]);
  if (props.category === 'delete') {
    return (
      <Modal animationType="slide" transparent={true} visible={props.isOpen}>
        <View style={deleteStyles.centeredView}>
          <View style={deleteStyles.mainContainer}>
            <View
              style={{
                ...deleteStyles.modalShadow2,
              }}>
              <View
                style={{
                  ...deleteStyles.proposalResultTitle,
                  marginTop: 10,
                  borderBottomWidth: 0,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: scaleFont(25),
                    textAlign: 'left',
                  }}>
                  Confirm Action
                </Text>
              </View>

              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                  width: '80%',
                  fontWeight: '600',
                  fontSize: scaleFont(20),
                  color: '#707070',
                }}>
                Are you sure you want to proceed? Any unsaved changes will be
                lost.
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'stretch',
                  width: '90%',
                }}>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 20,
                    marginBottom: 35,
                    marginTop: 20,
                  }}
                  onPress={() => props.setIsOpen(false)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'right',
                      fontSize: scaleFont(20),
                      color: 'black',
                    }}>
                    cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 20,
                    marginBottom: 35,
                    marginTop: 20,
                  }}
                  onPress={() => props.setIsOpen(false)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'right',
                      fontSize: scaleFont(20),
                      color: 'red',
                    }}>
                    proceed
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  } else if (props.category === 'edit') {
    return (
      <Modal animationType="slide" transparent={true} visible={props.isOpen}>
        <View style={editStyles.centeredView}>
          <View style={editStyles.mainContainer}>
            <View
              style={{
                ...editStyles.modalShadow2,
              }}>
              <View
                style={{
                  ...editStyles.proposalResultTitle,
                  //   backgroundColor: 'red',
                }}>
                <View
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 0,
                    marginLeft: 20,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: scaleFont(25),
                      textAlign: 'left',
                    }}>
                    CNHDM1K
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: scaleFont(25),
                      textAlign: 'left',
                    }}>
                    Champion Hotdog Mini 250g
                  </Text>
                </View>
              </View>

              <View style={{width: '80%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20,
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: scaleFont(20),
                      textAlign: 'center',
                    }}>
                    Qty Requested:
                  </Text>
                  <TextInput
                    style={{
                      paddingLeft: 10,
                      width: '65%',
                      borderBottomWidth: 1,
                      fontSize: scaleFont(20),
                    }}
                    placeholder="0.00"
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20,
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: scaleFont(20),
                      textAlign: 'center',
                    }}>
                    UOM:
                  </Text>
                  <View style={{width: '65%', borderBottomWidth: 1}}>
                    <RNPickerSelect
                      value={'date'}
                      onValueChange={value => null}
                      items={[
                        {label: 'Date', value: 'date'},
                        {label: 'Transaction No.', value: 'transactionNo'},
                      ]}
                      style={pickerSelectStyles}
                    />
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'stretch',
                  width: '90%',
                }}>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 20,
                    marginBottom: 35,
                    marginTop: 20,
                  }}
                  onPress={() => props.setIsOpen(false)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'right',
                      fontSize: scaleFont(20),
                      color: 'black',
                    }}>
                    cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 20,
                    marginBottom: 35,
                    marginTop: 20,
                  }}
                  onPress={() => props.setIsOpen(false)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'right',
                      fontSize: scaleFont(20),
                      color: 'red',
                    }}>
                    proceed
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
};

export default CustomModal;

const deleteStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF80',
  },
  modalShadow2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 10,
    width: '35%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: -5},
    elevation: 5,
    minHeight: '20%',
    maxHeight: '50%',
  },

  proposalResultTitle: {
    width: '80%',
    height: 40,
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

const editStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF80',
  },
  modalShadow2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 10,
    width: '40%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: -5},
    elevation: 5,
    minHeight: '20%',
    maxHeight: '100%',
  },

  proposalResultTitle: {
    width: '90%',
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize:
      height >= width
        ? scaleFont(18)
        : height <= 400
        ? scaleFont(18)
        : scaleFont(22),
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    width: '65%',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    paddingLeft: 40,
    marginTop: height >= width ? 10 : height <= 400 ? 0 : 10,
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'solid',
    color: '#000000',
    borderRadius: 10,
    fontFamily: 'Muli-Bold',
    width: '100%',
    transform: [{scaleX: 1.1}, {scaleY: 1.1}],
    fontSize:
      height >= width
        ? scaleFont(18)
        : height <= 400
        ? scaleFont(18)
        : scaleFont(22),
  },
});
