import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';
import {
  height,
  horizontalScale,
  scaleFont,
  width,
  windowWidth,
} from '../../../../utils/utils';
import {form, globalStyles} from '../../../../utils/styles';
import Search from '../../../../components/search/search.component';

const tableData = [
  {
    id: 2,
    ItemCode: '235482354672',
    TagName: 'WRFTLH250',
    Description: '8Winner Foot Long Hotdog ',
    brand: 'Virginia',
    UoM: 'Pack',
    GoodQty: 4,
    select: false,
  },
  {
    id: 3,
    ItemCode: '235482324672',
    TagName: 'WRFTLH250',
    Description: '8Winner Foot Long Hotdog ',
    brand: 'Virginia',
    UoM: 'Pack',
    GoodQty: 4,
    select: false,
  },
  {
    id: 4,
    ItemCode: '235482354672',
    TagName: 'WRFTLH220',
    Description: '8Winner Foot Long Hotdog',
    brand: 'Virgiania',
    UoM: 'Pack',
    GoodQty: 4,
    select: false,
  },
  {
    id: 5,
    ItemCode: '235482354652',
    TagName: 'WRFTLH250',
    Description: '8Winner Foot Long Hotdog 251g',
    brand: 'Mack',
    UoM: 'Pack',
    GoodQty: 4,
    select: false,
  },
  {
    id: 6,
    ItemCode: '235482354672',
    TagName: 'WRFTLH250',
    Description: '8Winner Foot Long Hotdog 2g',
    brand: 'Virginia',
    UoM: 'Pack',
    GoodQty: 4,
    select: false,
  },
  {
    id: 7,
    ItemCode: '235482354672',
    TagName: 'WRFTLH250',
    Description: '8Winner Foot Long Hotdog 250g',
    brand: 'Wellmade',
    UoM: 'Pack',
    GoodQty: 4,
    select: false,
  },
  {
    id: 8,
    ItemCode: '235482354679',
    TagName: 'WRFTLH250',
    Description: '8Winner Foot Long Hotdog 20g',
    brand: 'Virginia',
    UoM: 'Pack',
    GoodQty: 4,
    select: false,
  },
];

// const tableData = [
//   {
//     id: 2,
//     ItemCode: '235482354672',
//     TagName: 'WRFTLH250',
//     Description: '8Winner Foot Long Hotdog 250g',
//     brand: 'Virginia',
//     UoM: 'Pack',
//     GoodQty: 4,
//     select: false,
//   },
// ];
const columnNames = [
  'select',
  'ItemCode',
  'TagName',
  'Description',
  'brand',
  'UoM',
  'GoodQty',
];

const columnSettings = [
  {name: 'select', type: COL_TYPES.CHECK_BOX, width: '14.29%'},
  {name: 'ItemCode', type: COL_TYPES.STRING, width: '14.29%'},
  {name: 'TagName', type: COL_TYPES.STRING, width: '14.29%'},
  {name: 'Description', type: COL_TYPES.INT, width: '14.29%'},
  {name: 'brand', type: COL_TYPES.INT, width: '14.29%'},
  {name: 'UoM', type: COL_TYPES.INT, width: '14.29%'},
  {name: 'GoodQty', type: COL_TYPES.INT, width: '14.29%'},
];

const StockItemListScreen = () => {
  const [text, setText] = useState('');
  const [item, setItem] = useState(tableData);
  const [selectedItem, setSelectedItem] = useState([]);
  // const itemSelected = useMemo(
  //   () => item.filter(item => item.select === true),
  //   [item],
  // );
  const checkItem = async selectedRow => {
    let newCheck = selectedItem;
    const index = newCheck.findIndex(data => data.id === selectedRow.id);

    if (index !== -1) {
      newCheck = newCheck.filter(data => {
        return data.id !== selectedRow.id;
      });
    } else {
      newCheck = [...newCheck, selectedRow];
    }

    setSelectedItem(newCheck);
  };

  const searchDescription = searchText => {
    console.log('searchText', searchText);
    const filteredData = tableData.filter(data =>
      data.Description.includes(searchText),
    );
    setItem(filteredData);
    console.log('filteredData', filteredData);
  };

  return (
    <View
      style={{flex: 1, height: width <= 400 ? height * 0.5 : height * 0.52}}>
      <Search
        setText={setText}
        text={text}
        searchDescription={searchDescription}
        selectedItem={selectedItem}
      />
      <DataTable
        onRowSelect={row => checkItem(row)}
        data={item} // list of objects
        colNames={columnNames} //List of Strings
        colSettings={columnSettings} //List of Objects
        noOfPages={1} //number
        backgroundColor={'rgb(249,249,249)'} //Table Background Color
        headerLabelStyle={{
          ...form.formLabel,
          fontWeight: 'bold',
          color: 'black',
        }} //Text Style Works
      />
    </View>
  );
};

export default StockItemListScreen;

const styles = StyleSheet.create({});
