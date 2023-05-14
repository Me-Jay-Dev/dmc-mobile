import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TableWrapper, Cell} from 'react-native-table-component';
import {form} from '../../../utils/styles';
import {height, scaleFont, width} from '../../../utils/utils';

const TableHeader = ({
  tableHead,
  tableElement,
  actionPercentile,
  percentile,
}) => {
  return (
    <TableWrapper key={1} style={styles.row}>
      {tableHead?.map((key, i) => {
        console.log('tableHead', key);
        return (
          <Cell
            style={{
              overflow: 'hidden',
              width: `${
                key === 'Action' && tableElement === 'loadInAction'
                  ? actionPercentile
                  : percentile
              }%`,
            }}
            key={i}
            data={key}
            textStyle={styles.text}
          />
        );
      })}
    </TableWrapper>
  );
};

export default TableHeader;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    overflow: 'hidden',
    borderColor: 'gray',
    borderBottomWidth: 0.5,
  },
  text: {
    ...form.formLabel,
    fontSize:
      height >= width
        ? scaleFont(12)
        : height <= 400
        ? scaleFont(12)
        : scaleFont(16),
    margin: 6,
    textAlign: 'center',
  },
});
