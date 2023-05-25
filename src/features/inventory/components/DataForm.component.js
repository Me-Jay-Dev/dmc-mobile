import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { form,globalStyles } from '../../../utils/styles'
import RNPickerSelect from 'react-native-picker-select-gian';
import {Button} from 'react-native-paper';
import { height, scaleFont, width } from '../../../utils/utils';
const DataForm = ({navigation}) => {
  return (
    <View style={{width: '30%'}}>
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor:"#fff"}} >
   
      <View style={{marginBottom: 20}}>
        <View
          style={{
            padding: 13 ,
            borderBottomWidth: .25,
            backgroundColor: '#f7f9fd',
          }}>
          <Text
            style={{
              ...form.formLabel,
              backgroundColor: '#f7f9fd',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Warehouse Details
          </Text>
        </View>
        <View style={{marginLeft: 10}}>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                ...form.formLabel,
                fontSize:
                  height >= width
                    ? scaleFont(12)
                    : height <= 400
                    ? scaleFont(12)
                    : scaleFont(18),
                marginBottom: 20,
              }}>
              To Warehouse:
            </Text>
            <View style={{width: '90%', ...styles.input}}>
              <RNPickerSelect
                value={'date'}
                onValueChange={() => null}
                items={[
                  {label: 'Date', value: 'date'},
                  {label: 'Transaction No.', value: 'transactionNo'},
                ]}
                style={pickerSelectStyles}
              />
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                ...form.formLabel,
                fontSize:
                  height >= width
                    ? scaleFont(12)
                    : height <= 400
                    ? scaleFont(12)
                    : scaleFont(18),
                marginBottom: 20,
              }}>
              Address:
            </Text>
            <TextInput
              placeholder="Address"
              style={{...styles.input, width: '90%'}}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                ...form.formLabel,
                fontSize:
                  height >= width
                    ? scaleFont(12)
                    : height <= 400
                    ? scaleFont(12)
                    : scaleFont(18),
                marginBottom: 20,
              }}>
              Contact:
            </Text>
            <TextInput
              placeholder="Enter contact No."
              style={{...styles.input, width: '90%'}}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                ...form.formLabel,
                fontSize:
                  height >= width
                    ? scaleFont(12)
                    : height <= 400
                    ? scaleFont(12)
                    : scaleFont(18),
                marginBottom: 20,
              }}>
              Email:
            </Text>
            <TextInput
              placeholder="sample@gmail.com"
              style={{...styles.input, width: '90%'}}
            />
          </View>
        </View>
      </View>
      <View style={{marginBottom: 20}}>
        <View
          style={{
            padding: 6,
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              ...form.formLabel,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Summation Info
          </Text>
        </View>
        <View style={{marginLeft: 10}}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text
              style={{
                ...form.formLabel,
                fontSize:
                  height >= width
                    ? scaleFont(12)
                    : height <= 400
                    ? scaleFont(12)
                    : scaleFont(18),
              }}>
              To Warehouse:
            </Text>
            <Text
              style={{
                ...styles.input,
                fontSize:
                  height >= width
                    ? scaleFont(12)
                    : height <= 400
                    ? scaleFont(12)
                    : scaleFont(18),
                paddingHorizontal: 20,
              }}>
              2 SKU
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text
              style={{
                ...form.formLabel,
                fontSize:
                  height >= width
                    ? scaleFont(12)
                    : height <= 400
                    ? scaleFont(12)
                    : scaleFont(18),
              }}>
              To Warehouse:
            </Text>
            <Text
              style={{
                ...styles.input,
                fontSize:
                  height >= width
                    ? scaleFont(12)
                    : height <= 400
                    ? scaleFont(12)
                    : scaleFont(18),
                paddingHorizontal: 20,
              }}>
              2 SKU
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text
              style={{
                ...form.formLabel,
                fontSize:
                  height >= width
                    ? scaleFont(12)
                    : height <= 400
                    ? scaleFont(12)
                    : scaleFont(18),
              }}>
              To Warehouse:
            </Text>
            <Text
              style={{
                ...styles.input,
                fontSize:
                  height >= width
                    ? scaleFont(12)
                    : height <= 400
                    ? scaleFont(12)
                    : scaleFont(18),
                paddingHorizontal: 20,
              }}>
              2 SKU
            </Text>
          </View>
        </View>
      </View>
      <Button
        mode="contained"
        onPress={() => 
          navigation.navigate('Inventory', {isStockTransfer: false})

      }
        labelStyle={{
          fontSize: 20,
        }}
        style={{
          alignSelf: 'center',
          padding: 5,
          marginBottom:10,
          backgroundColor:'black'
        }}>
        Submit
      </Button>
    </ScrollView>
  </View>
  )
}

export default DataForm

const styles = StyleSheet.create({
    input: {
      fontSize:
        height >= width
          ? scaleFont(12)
          : height <= 400
          ? scaleFont(12)
          : scaleFont(18),
      borderColor: '#707070',
      borderStyle: 'solid',
      borderRadius: 10,
      // color: '#707070',
    },
  });
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize:
        height >= width
          ? scaleFont(12)
          : height <= 400
          ? scaleFont(12)
          : scaleFont(18),
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      width: '100%',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      paddingLeft: 40,
      paddingRight: 30, // to ensure the text is never behind the icon
      paddingVertical: 12,
      paddingHorizontal: 10,
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
          ? scaleFont(12)
          : height <= 400
          ? scaleFont(12)
          : scaleFont(18),
    },
  });