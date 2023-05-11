import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {form} from '../../utils/styles';
import SearchBar from 'react-native-dynamic-search-bar';
import { height, scaleFont, width } from '../../utils/utils';

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
        {/* <TextInput
          placeholder="Search......."
          value={text}
          mode="outlined"
          outlineStyle={{
            backgroundColor: 'transparent',
            borderRadius: 20,
          }}
          style={{width: '70%', ...form.formLabel}}
          onChangeText={text => {
            setText(text);
            searchDescription(text);
          }}
        /> */}
        <SearchBar
          style={{width: '70%', ...form.formLabel, borderRadius: 20}}
          height={100}
          fontSize={height >= width
            ? scaleFont(14)
            : height <= 400
            ? scaleFont(14)
            : scaleFont(20)}

          placeholder="Search here"
          // onPress={() => alert("onPress")}
          onChangeText={text => {
            setText(text);
            searchDescription(text);
          }}
          onClearPress = {() => {
            setText("");
            searchDescription("");
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
