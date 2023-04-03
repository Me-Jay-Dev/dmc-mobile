import {StyleSheet, View} from 'react-native';
import React from 'react';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';
import {height, scaleFont, width, windowWidth} from '../../../utils/utils';

const tableData = [
  {
    id: 1,
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '1Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 2,
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '1Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 3,
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '3Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 4,
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '4Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 5,
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '5Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    id: 6,
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '6Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    id: 7,
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '7Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    id: 8,
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '8Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    id: 1,
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '1Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 2,
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '1Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 3,
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '3Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 4,
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '4Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 5,
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '5Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    id: 6,
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '6Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    id: 7,
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '7Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    id: 8,
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '8Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    id: 1,
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '1Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 2,
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '1Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 3,
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '3Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 4,
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '4Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
    select: false,
  },
  {
    id: 5,
    productCode: '480088168373',
    tag_name: 'HBR250G',
    description: '5Happy Booster Hotdog Regular 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    id: 6,
    productCode: '480021354834',
    tag_name: 'CNHDJ1KG',
    description: '6Champion Hotdog Jumbo 1 Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    id: 7,
    productCode: '125783542465',
    tag_name: 'BSCDK1K',
    description: '7Big Shot Cheesedoog King Size 1Kg',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
  {
    id: 8,
    productCode: '235482354679',
    tag_name: 'WRFTLH250',
    description: '8Winner Foot Long Hotdog 250g',
    badQty: 2,
    goodQty: 2,
    totalQty: 4,
  },
];

const columnNames = [
  'productCode',
  'description',
  'badQty',
  'goodQty',
  'totalQty',
];

const columnSettings = [
  {name: 'productCode', type: COL_TYPES.STRING, width: '20%'},
  {name: 'description', type: COL_TYPES.STRING, width: '32%'},
  {name: 'badQty', type: COL_TYPES.INT, width: '16%'},
  {name: 'goodQty', type: COL_TYPES.INT, width: '16%'},
  {name: 'totalQty', type: COL_TYPES.INT, width: '16%'},
];

const InventoryScreen = () => {
  console.log('width', width);
  console.log('heigt', height);
  return (
    <View style={{height: width <= 400 ? width * 0.5 : height * 0.52}}>
      <DataTable
        onRowSelect={() => null}
        data={tableData} // list of objects
        colNames={columnNames} //List of Strings
        colSettings={columnSettings} //List of Objects
        noOfPages={1} //number
        doHighlight={{doHighlight: 'green'}}
        backgroundColor={'rgb(249,249,249)'} //Table Background Color
        headerLabelStyle={{
          color: 'black',
          fontSize: scaleFont(15),
          fontWeight: 'bold',
        }} //Text Style Works
      />
    </View>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({});
