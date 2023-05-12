import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {form, globalStyles} from '../../../../../../utils/styles';
import CustomTable from '../../../../../../components/customTable/customTable.component';
import CustomModal from '../../../../../../components/modal/modal.component';
import {
  height,
  horizontalScale,
  scaleFont,
  width,
} from '../../../../../../utils/utils';
import RNPickerSelect from 'react-native-picker-select-gian';
import {Button} from 'react-native-paper';

const tableData = [
  {
    id: 1,
    description: '1Happy Booster Hotdog Regular ',
    type: 'reg',
    price: '12.4',
    bal: 45,
    qty: 23.0,
    uom: 'packs',
    disc: 0.0,
    subTotal: 900,
    productCode: '480088168373',
    select: false,
  },
];
const columnNames = ['Action', 'Description', 'Type', 'UOM', 'Qty'];
const LoadOutSelectedItemListSreen = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('delete');
  const openModal = ({isOpen = false, category = 'delete'}) => {
    setCategory(category);
    setIsOpen(isOpen);
  };
  return (
    <View
      style={{
        ...globalStyles.tableContainer,
        backgroundColor: 'rgb(249,249,249)',
      }}>
      <View style={{flexDirection: 'row', flex: 1, width: '100%'}}>
        <View style={{width: '30%'}}>
          <ScrollView contentContainerStyle={{flexGrow: 1}} >
         
            <View style={{marginBottom: 20}}>
              <View
                style={{
                  backgroundColor: 'skyblue',
                  padding: 6,
                  borderBottomWidth: 1,
                }}>
                <Text
                  style={{
                    ...form.formLabel,
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
                  backgroundColor: 'skyblue',
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
                backgroundColor: 'black',
                alignSelf: 'center',
                padding: 10,
                marginBottom:10
              }}>
              Submit
            </Button>
          </ScrollView>
        </View>
        <CustomTable
          tableHead={columnNames}
          rowData={tableData}
          tableElement="Action"
          filterElement="id"
          setToggleCheckBox={openModal}
        />
      </View>
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} category={category} />
    </View>
  );
};

export default LoadOutSelectedItemListSreen;

const styles = StyleSheet.create({
  input: {
    fontSize:
      height >= width
        ? scaleFont(12)
        : height <= 400
        ? scaleFont(12)
        : scaleFont(18),
    backgroundColor: 'white',
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
