import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomDatePicker from '../datepicker/datepicker.component';
import RNPickerSelect from 'react-native-picker-select-gian';
import {form, globalStyles} from '../../utils/styles';
import {height, scaleFont, width} from '../../utils/utils';

const FilterData = ({
  setDateFrom,
  setDateTo,
  dateTo,
  dateFrom,
  setType,
  setAscending,
  type,
  ascending,
}) => {
  console.log('height', height);
  console.log('width', width);

  return (
    <View style={globalStyles.rowDirection}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{justifyContent: 'space-between'}}>
        <View style={{...globalStyles.rowDirection, marginRight: 20}}>
          <Text style={{...form.formLabel}}>Date From:</Text>
          <CustomDatePicker
            dateValue={dateFrom}
            setDateValue={value => {
              setDateFrom(value);
            }}
          />
        </View>
        <View style={{...globalStyles.rowDirection, marginRight: 20}}>
          <Text style={{...form.formLabel}}>Date To:</Text>
          <CustomDatePicker
            dateValue={dateTo}
            setDateValue={value => setDateTo(value)}
          />
        </View>
        <View style={{...globalStyles.rowDirection, marginRight: 20}}>
          <Text style={{...form.formLabel}}>Sort By:</Text>
          <RNPickerSelect
            value={type}
            onValueChange={value => setType(value)}
            items={[
              {label: 'Date', value: 'date'},
              {label: 'Transaction No.', value: 'transactionNo'},
            ]}
            style={pickerSelectStyles}
          />
        </View>
        <View style={{...globalStyles.rowDirection, marginRight: 20}}>
          <Text style={{...form.formLabel}}>Sort By:</Text>
          <RNPickerSelect
            value={ascending}
            onValueChange={value => setAscending(value)}
            items={[
              {label: 'Ascending', value: 'ascending'},
              {label: 'Descending', value: 'decscending'},
            ]}
            style={pickerSelectStyles}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FilterData;

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
    width: 150,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    paddingLeft: 20,
    marginTop: height >= width ? 10 : height <= 400 ? 0 : 10,
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'solid',
    color: '#000000',
    borderRadius: 10,
    fontFamily: 'Muli-Bold',
    width: 200,
    transform: [{scaleX: 1.1}, {scaleY: 1.1}],
    fontSize:
      height >= width
        ? scaleFont(18)
        : height <= 400
        ? scaleFont(18)
        : scaleFont(22),
  },
});
