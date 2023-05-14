import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomDatePicker from '../datepicker/datepicker.component';
import RNPickerSelect from 'react-native-picker-select-gian';
import {form, globalStyles} from '../../utils/styles';
import {height, scaleFont, width} from '../../utils/utils';
import SelectMultiple from 'react-native-select-multiple';

const FilterData = ({
  setDateFrom,
  setDateTo,
  dateTo,
  dateFrom,
  setType,
  setAscending,
  type,
  ascending,
  isStockTransfer,
  selectedView,
  setSelectedView,
  isOpenView,
  setIsOpenView,
}) => {
  console.log('height', height);
  console.log('width', width);
  const fruits = ['Stock Load In', 'Stock Load Out', 'Panel Transfer'];

  const onSelectionsChange = selectedFruits => {
    console.log('selectedFruits', selectedFruits);
    setSelectedView(selectedFruits);
  };
  const renderLabel = (label, style) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 10}}>
          <Text style={{...form.formLabel}}>{label}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={globalStyles.rowDirection}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
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

          {isStockTransfer && (
            <View style={{...globalStyles.rowDirection, marginRight: 20}}>
              <Text style={{...form.formLabel}}>View By:</Text>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => setIsOpenView(true)}>
                {selectedView.length === 0 ||
                selectedView.length === fruits.length ? (
                  <Text
                    style={{
                      ...form.formLabel,
                      borderBottomWidth: 1,
                      marginHorizontal: 5,
                    }}>
                    All
                  </Text>
                ) : (
                  selectedView.map(view => (
                    <Text style={{...form.formLabel, marginHorizontal: 5}}>
                      {view.label},{' '}
                    </Text>
                  ))
                )}
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={isOpenView}>
                <TouchableWithoutFeedback onPress={() => setIsOpenView(false)}>
                  <View style={styles.centeredView}>
                    <View style={styles.mainContainer}>
                      <View
                        style={{
                          ...styles.modalShadow2,
                        }}>
                        <Text
                          style={{
                            alignSelf: 'flex-end',
                            margin: 10,
                            fontSize: 20,
                          }}>
                          X
                        </Text>
                        <SelectMultiple
                          items={fruits}
                          renderLabel={renderLabel}
                          selectedItems={selectedView}
                          onSelectionsChange={onSelectionsChange}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            </View>
          )}

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
              fixAndroidTouchableBug={true}
              disabled={false}
              value={ascending}
              onValueChange={value => setAscending(value)}
              items={[
                {label: 'Ascending', value: 'ascending'},
                {label: 'Descending', value: 'decscending'},
              ]}
              style={pickerSelectStyles}
            />
          </View>
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
    marginTop: height >= width ? 10 : height <= 400 ? 0 : 10,

    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    width: 150,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    paddingLeft: 20,
    // marginTop: height >= width ? 10 : height <= 400 ? 0 : 10,
    marginTop: scaleFont(10),
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

const styles = StyleSheet.create({
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
});
