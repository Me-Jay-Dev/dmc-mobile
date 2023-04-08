import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {form} from '../../utils/styles';
import {height, scaleFont, width} from '../../utils/utils';

const CustomTable = ({rowData, tableHead}) => {
  const element = (data, index) => (
    <View
      style={{
        ...styles.btn,
      }}>
      <Text
        style={{
          ...form.formLabel,
          color: data === 'Draft' ? 'green' : 'red',

          margin: 6,
          textAlign: 'center',
        }}>
        {data}
      </Text>
    </View>
  );

  return (
    <Table borderStyle={{borderColor: 'transparent'}}>
      <Row data={tableHead} style={styles.head} textStyle={styles.textHeader} />
      <ScrollView>
        {rowData.map((item, index) => (
          <TableWrapper key={index} style={styles.row}>
            {Object.keys(item).map((key, subIndex) => (
              <>
                <Cell
                  key={subIndex}
                  data={
                    key === 'Status' ? element(item[key], index) : item[key]
                  }
                  textStyle={{
                    ...form.formLabel,
                    margin: 6,
                    textAlign: 'center',
                  }}
                />
              </>
            ))}
          </TableWrapper>
        ))}
      </ScrollView>
    </Table>
  );
};

export default CustomTable;

const styles = StyleSheet.create({
  container: {flex: 1, height: width <= 400 ? width * 0.5 : height * 0.52},
  head: {
    height: 40,
    // backgroundColor: 'rgb(249,249,249)',
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderColor: 'gray',
    borderBottomWidth: 0.5,
  },
  textHeader: {
    alignSelf: 'center',
    margin: 6,
    color: 'black',
    fontSize: scaleFont(16),
    fontWeight: 'bold',
  },
  text: {margin: 6, alignSelf: 'center'},

  btn: {
    borderRadius: 2,
    width: '50%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  btnText: {textAlign: 'center', color: '#fff', padding: 5},
});
