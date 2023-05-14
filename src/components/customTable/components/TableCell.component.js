import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TableWrapper, Cell} from 'react-native-table-component';
import {form} from '../../../utils/styles';
import {height, scaleFont, width} from '../../../utils/utils';

const TableCell = ({
  rowData = [],
  CellElement,
  filterElement,
  tableElement,
  actionPercentile,
  percentile,
}) => {
  return (
    <ScrollView style={{flex: 1}}>
      {rowData.map((item, index) => (
        <TableWrapper key={index} style={styles.row}>
          {Object.keys(item).map((key, subIndex) => {
            return (
              <>
                <Cell
                  style={{
                    overflow: 'hidden',
                    justifyContent: 'center',
                    width: `${
                      key === filterElement && tableElement === 'loadInAction'
                        ? actionPercentile
                        : percentile
                    }%`,
                  }}
                  key={subIndex}
                  data={
                    key === filterElement
                      ? CellElement(item[key], item)
                      : item[key]
                  }
                  textStyle={{
                    ...styles.textCell,
                  }}
                />
              </>
            );
          })}
        </TableWrapper>
      ))}
    </ScrollView>
  );
};

export default TableCell;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    overflow: 'hidden',
    borderColor: 'gray',
    borderBottomWidth: 0.5,
  },
  textCell: {
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
