import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TableElement = element => {
  const componentMap = {
    dropdown: Dropdown,
    dateTimePicker: DateTime,
    checkboxes: Checkbox,
    text: SingleText,
    textarea: TextForm,
    markup: Markup,
    dateTimeRegister: DateTimeButton,
    cameraButton: TakePictureButton,
    radios: RadioButton,
    survey: SurveyButton,
    printButton: PrinterButton,
    signature: Sign,
    button: Button,
    attachButton: AttachImage,
    datePicker: DatePicker,
  };

  const MatchComponent = componentMap[inputType];
  return (
    <View>
      <Text>TableElement</Text>
    </View>
  );
};

export default TableElement;

const styles = StyleSheet.create({});
