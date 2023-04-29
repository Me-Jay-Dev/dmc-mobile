import {StyleSheet, View} from 'react-native';
import React from 'react';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';
import {height, scaleFont, width, windowWidth} from '../../../utils/utils';
import {form, globalStyles} from '../../../utils/styles';
import CustomTable from '../../../components/customTable/customTable.component';

const tableData = [
  {
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '1Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '1Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '3Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '4Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '5Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '6Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '7Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '8Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '1Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '1Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '3Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '4Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '5Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '6Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '7Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '8Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '1Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '1Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '3Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '4Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '5Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '6Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '7Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '888Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
];

const columnNames = [
  'Product Code',
  'Tag Name',
  'Description',
  'Bad Qty',
  'Good Qty',
  'Total Qty',
];

const InventoryScreen = () => {
  console.log('width', width);
  console.log('heigt', height);
  return (
    <View
      style={{
        ...globalStyles.tableContainer,
        backgroundColor: 'rgb(249,249,249)',
      }}>
      <CustomTable
        tableHead={columnNames}
        rowData={tableData}
        filterElement="select"
      />
    </View>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({});
