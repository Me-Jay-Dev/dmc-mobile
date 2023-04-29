import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomTable from '../../../../components/customTable/customTable.component';
import {globalStyles} from '../../../../utils/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomModal from '../../../../components/modal/modal.component';

const tableData = [
  {
    id: 1,
    description: '1Happy Booster Hotdog Regular ',
    type: 'reg',
    price: '12.4',
    bal: 45,
    qty: 23.0,
    uom: 'packs',
    disc: 0.0,
    subTotal: 900,
    productCode: '480088168373',
    select: false,
  },
];
const columnNames = [
  '',
  'Description',
  'Type',
  'Price',
  'Bal',
  'Qty.',
  'UOM',
  'Disc',
  'Sub-Total',
];
const StockSelectedItemListScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('delete');
  const openModal = ({isOpen = false, category = 'delete'}) => {
    setCategory(category);
    setIsOpen(isOpen);
  };
  return (
    <View
      style={{
        ...globalStyles.tableContainer,
        backgroundColor: 'rgb(249,249,249)',
      }}>
      <CustomTable
        tableHead={columnNames}
        rowData={tableData}
        tableElement="action"
        filterElement="id"
        setToggleCheckBox={openModal}
      />
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} category={category} />
    </View>
  );
};

export default StockSelectedItemListScreen;

const styles = StyleSheet.create({});
