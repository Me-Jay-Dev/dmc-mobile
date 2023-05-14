import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Table, TableWrapper, Cell} from 'react-native-table-component';
import {form} from '../../utils/styles';
import {height, scaleFont, width} from '../../utils/utils';
import CheckBox from '@react-native-community/checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TableHeader from './components/TableHeader.component';
import TableCell from './components/TableCell.component';

const CustomTable = ({
  rowData = [],
  tableHead = [],
  filterElement = '',
  tableElement = 'text',
  setToggleCheckBox,
  tableElementPosition = 0,
}) => {
  const actionPercentile = tableElement === 'loadInAction' ? 20 : 0;
  const length =
    tableElement === 'loadInAction' ? tableHead.length - 1 : tableHead.length;
  const percentile = (100 - actionPercentile) / length;
  const CellElement = (data, item) => {
    switch (tableElement) {
      case 'text':
        return (
          <Text
            style={{
              ...styles.textCell,
              color: data === 'Draft' ? 'green' : 'red',
            }}>
            {data === 'Draft' ? 'green' : 'red'}
          </Text>
        );
      case 'checkbox':
        return (
          <CheckBox
            disabled={false}
            value={item.select}
            onValueChange={newValue => {
              item.select = true;
              setToggleCheckBox(item);
            }}
            style={{margin: 6}}
          />
        );
      case 'Action':
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() =>
                setToggleCheckBox({isOpen: true, category: 'delete'})
              }>
              <MaterialCommunityIcons
                name="close"
                color={'red'}
                size={25}
                style={styles.actionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setToggleCheckBox({isOpen: true, category: 'edit'})
              }>
              <MaterialCommunityIcons
                name="file-document-edit-outline"
                color={'black'}
                size={25}
                style={styles.actionIcon}
              />
            </TouchableOpacity>
          </View>
        );
      case 'loadInAction':
        return (
          <View style={styles.loadInActionCell}>
            <TouchableOpacity
              onPress={() => null}
              style={{
                ...styles.loadInActionButton,
                backgroundColor: 'skyblue',
              }}>
              <Text style={styles.loadInActionText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => null}
              style={{
                ...styles.loadInActionButton,
                backgroundColor: 'green',
              }}>
              <Text style={styles.loadInActionText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => null}
              style={{
                ...styles.loadInActionButton,
                backgroundColor: 'red',
              }}>
              <Text style={styles.loadInActionText}>Reject</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <Table
      borderStyle={{borderColor: 'transparent'}}
      style={{width: '100%', height: '100%', flex: 1}}>
      <TableHeader
        tableHead={tableHead}
        tableElement={tableElement}
        percentile={percentile}
        actionPercentile={actionPercentile}
      />
      <TableCell
        rowData={rowData}
        CellElement={CellElement}
        filterElement={filterElement}
        tableElement={tableElement}
        actionPercentile={actionPercentile}
        percentile={percentile}
      />
    </Table>
  );
};

export default CustomTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: width >= 400 ? width * 0. : height * 0.52,
    padding: 16,
    paddingTop: 30,
  },
  head: {
    height: 40,
    alignSelf: 'center',
    // backgroundColor: 'rgb(249,249,249)',
    borderBottomWidth: 0.5,
    alignContent: 'center',
    borderColor: 'gray',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    overflow: 'hidden',
    borderColor: 'gray',
    borderBottomWidth: 0.5,
  },
  textHeader: {
    alignSelf: 'center',
    // margin: 6,
    color: 'black',
    fontSize:
      height >= width
        ? scaleFont(14)
        : height <= 400
        ? scaleFont(14)
        : scaleFont(20),
    fontWeight: 'bold',
    // width: '100%',
  },
  text: {margin: 6, alignSelf: 'center'},

  btn: {
    borderRadius: 2,
    borderRadius: 5,
    alignSelf: 'center',
  },
  btnText: {textAlign: 'center', color: '#fff', padding: 5},
  textCell: {
    fontSize:
      height >= width
        ? scaleFont(12)
        : height <= 400
        ? scaleFont(12)
        : scaleFont(16),
    margin: 6,
    textAlign: 'center',
  },
  actionIcon: {
    alignSelf: 'center',
    marginRight: 5,
  },
  loadInActionCell: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadInActionButton: {
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  loadInActionText: {
    fontSize:
      height >= width
        ? scaleFont(12)
        : height <= 400
        ? scaleFont(12)
        : scaleFont(16),
    textAlign: 'center',
  },
});
