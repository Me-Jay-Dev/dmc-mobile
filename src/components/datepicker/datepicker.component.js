import React, {useState, useEffect} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Text,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {form} from '../../utils/styles';
import {height, horizontalScale, scaleFont, width} from '../../utils/utils';

const CustomDatePicker = ({dateValue, setDateValue, format = 'YYYY-MM-DD'}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  //   useEffect(() => {
  //     setDate(new Date());
  //   }, [dateValue]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setShowCalendar(true);
          Keyboard.dismiss();
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignContent:'center',
            marginLeft: 10,
          }}>
          <Text
            style={{
              fontSize:
                height >= width
                  ? scaleFont(12)
                  : height <= 400
                  ? scaleFont(12)
                  : scaleFont(16),
            }}>
            {dateValue.toDateString()}
          </Text>
          <MaterialCommunityIcons
            name="update"
            color={'black'}
            size={horizontalScale(20)}
            style={{ marginLeft: 10,alignSelf:'center'}}
          />
        </View>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={showCalendar}
        date={dateValue}
        onConfirm={date => {
          setShowCalendar(false);
          console.log('date', date);
          setDateValue(date);
        }}
        onCancel={() => {
          setShowCalendar(false);
        }}
      />
    </View>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  calendarIcon: {
    marginLeft: -35,
    paddingRight: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#bcbcbc',
  },
});
