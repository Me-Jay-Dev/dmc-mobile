import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {form, globalStyles} from '../../utils/styles';
import SearchBar from 'react-native-dynamic-search-bar';
import {height, scaleFont, width} from '../../utils/utils';

const Search = ({
  setText,
  text,
  searchDescription,
  selectedItem,
  isViewCount = true,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f7f9fd',
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
          style={{
            width: '70%',
            height:50,
            ...form.formLabel,
            borderRadius: 20,
            elevation: 9,
            shadowRadius: 3,
            shadowOpacity: 0.2,
            shadowOffset: {width: 0, height: 5},
          }}
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
            setText(text);
            searchDescription(text);
          }}
          onClearPress={() => {
            setText('');
            searchDescription('');
          }}
        />
      </View>

      {isViewCount && (
        <View
          style={{ flexDirection: 'row', alignItems: 'center',paddingHorizontal:10}}>
          <Text style={{...form.formLabel, fontWeight: 'bold'}}>
            Item Selected:
          </Text>
          <View
            style={{
              marginLeft: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              ...globalStyles.filterContainter,
              width: 40,
              height: 40,
            }}>
            <Text style={{...form.formLabel}}>{selectedItem.length}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
