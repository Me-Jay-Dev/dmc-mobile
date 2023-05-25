import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, scaleFont, width} from '../../../utils/utils';
import {form} from '../../../utils/styles';
import SearchBar from 'react-native-dynamic-search-bar';
import CustomDatePicker from '../../../components/datepicker/datepicker.component';
import {globalStyles} from '../../../utils/styles';
import CustomTable from '../../../components/customTable/customTable.component';

const tableData = [
    {
      productCode: '480088168373',
      tag_name: 'HBR250G',
      description: '1Happy Booster Hotdog Regular 250g',
      badQty: 2,
      goodQty: 2,
      totalQty: 4,
      select: false,
    },
]

  
const columnNames = [
    'Product Code',
    'Tag Name',
    'Description',
    'Bad Qty',
    'Good Qty',
    'Total Qty',
  ];
const RcpScreen = () => {
  const currentDate = new Date();

  return (
    <View style={globalStyles.tableContainer}>
      {/* <View style={{margin: 10, alignItems: 'center'}}>
        <Text
          style={{
            fontWeight:'bold',
            color: '#000000',
            fontSize:
              height >= width
                ? scaleFont(16)
                : height <= 400
                ? scaleFont(16)
                : scaleFont(22),
          }}>
          JUNE 18, 2022 - JUNE 22, 2022
        </Text>
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 5,
          backgroundColor: '#f7f9fd',

        }}>
        <SearchBar
          style={{
            width: '50%',
            ...form.formLabel,
            borderRadius: 20,
            height: 50,
          }}
          height={100}
          fontSize={
            height >= width
              ? scaleFont(14)
              : height <= 400
              ? scaleFont(14)
              : scaleFont(20)
          }
          placeholder="Search here"
          // onPress={() => alert("onPress")}
          onChangeText={text => {
            null;
          }}
          onClearPress={() => {
            null;
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{...globalStyles.rowDirection, marginRight: 20}}>
            <Text style={{...form.formLabel}}>Date From:</Text>
            <CustomDatePicker
              dateValue={currentDate}
              setDateValue={value => {
                null;
              }}
            />
          </View>
          <View style={{...globalStyles.rowDirection, marginRight: 20}}>
            <Text style={{...form.formLabel}}>Date From:</Text>
            <CustomDatePicker
              dateValue={currentDate}
              setDateValue={value => {
                null;
              }}
            />
          </View>
        </View>
      </View>

      <CustomTable
        tableHead={columnNames}
        rowData={tableData}
        filterElement="select"
      />
    </View>
  );
};

export default RcpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgb(249,249,249)',

  },
});
