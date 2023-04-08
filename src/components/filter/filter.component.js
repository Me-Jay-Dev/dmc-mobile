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
  return (
    <View style={globalStyles.rowDirection}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View style={{...globalStyles.rowDirection, marginRight: 50}}>
          <Text style={{...form.formLabel}}>Date From:</Text>

          <CustomDatePicker
            dateValue={dateFrom}
            setDateValue={value => {
              console.log('value', value);
              setDateFrom(value);
            }}
          />
        </View>
        <View style={{...globalStyles.rowDirection, marginRight: 50}}>
          <Text style={{...form.formLabel}}>Date To:</Text>
          <CustomDatePicker
            dateValue={dateTo}
            setDateValue={value => setDateTo(value)}
          />
        </View>
        <View style={{...globalStyles.rowDirection, marginRight: 50}}>
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
        <View style={{...globalStyles.rowDirection, marginRight: 50}}>
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
    fontSize: scaleFont(16),
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
    marginTop: width <= 400 ? 0 : 10,
    borderWidth: 1,
    borderColor: '#707070',
    borderStyle: 'solid',
    color: '#000000',
    borderRadius: 10,
    alignSelf: 'center',
    fontFamily: 'Muli-Bold',
    width: 200,
    transform: [{scaleX: 1.1}, {scaleY: 1.1}],
    fontSize: scaleFont(16),
  },
});
