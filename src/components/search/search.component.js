import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {form} from '../../utils/styles';

const Search = ({setText, text, searchDescription, selectedItem}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <TextInput
          placeholder="Search......."
          value={text}
          mode="outlined"
          outlineStyle={{
            backgroundColor: 'transparent',
            borderRadius: 20,
          }}
          style={{width: '80%'}}
          onChangeText={text => {
            setText(text);
            searchDescription(text);
          }}
        />
      </View>

      <View
        style={{marginRight: 50, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{...form.formLabel, fontWeight: 'bold'}}>
          Item Selected:
        </Text>
        <View
          style={{
            marginLeft: 10,
            width: 40,
            height: 40,
            borderWidth: 0.5,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...form.formLabel}}>{selectedItem.length}</Text>
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
