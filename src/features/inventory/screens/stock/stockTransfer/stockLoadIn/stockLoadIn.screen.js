import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {globalStyles} from '../../../../../../utils/styles';
// import Search from '../../../../../../components/search/search.component';
import CustomTable from '../../../../../../components/customTable/customTable.component';

const StockLoadInScreen = () => {
  const tableData = [
    {
      id: 1,
      Status: '1Happy Booster Hotdog Regular ',
      Date: 'reg',
      ReferenceNo: '12.4',
    asd: 23.0,
      ΣQty: 45,
    },
  ];
  const columnNames = [
    'Action',
    'Date',
    'Reference No.',
    'ΣQty',
    'ΣSKU',
    'Status',
  ];
  const isFocused = useIsFocused();
  const [text, setText] = useState('');
  const [item, setItem] = useState(tableData);
  const [selectedItem, setSelectedItem] = useState([]);

//   useEffect(() => {
//     // setItem(tableData);
//     console.log('SELECTEDITEM', selectedItem);
//     searchDescription(text);
//   }, [setSelectedItem, selectedItem]);

//   useEffect(() => {
//     setItem(tableData);
//     setSelectedItem([]);
//   }, [isFocused]);
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
    const updatedTableData = tableData.map(item => {
      const selectedItemFound = newCheck.find(
        selected => selected.id === item.id,
      );
      if (selectedItemFound && item.description.includes('')) {
        return {
          ...item,
          select: true,
        };
      } else {
        return {
          ...item,
          select: false,
        };
      }
    });
    setItem(updatedTableData);
    setSelectedItem(newCheck);
  };

//   const searchDescription = searchText => {
//     console.log('selectedItem', selectedItem);

//     let selectedItems = selectedItem;

//     const updatedTableData = tableData
//       .map(item => {
//         const selectedItemFound = selectedItems.find(
//           selected => selected.id === item.id,
//         );
//         if (selectedItemFound && item.description.includes(searchText)) {
//           return {
//             ...item,
//             select: true,
//           };
//         } else {
//           return {
//             ...item,
//             select: false,
//           };
//         }
//       })
//       .filter(item => item.description.includes(searchText));
//     setItem(updatedTableData);
//     console.log('selectedItem1', selectedItem);
//   };
  return (
    <View
      style={{
        ...globalStyles.tableContainer,
        backgroundColor: 'rgb(249,249,249)',
      }}>
      {/* <Search
        setText={setText}
        text={text}
        searchDescription={searchDescription}
        selectedItem={selectedItem}
        isViewCount={false}
      /> */}
      <CustomTable
        tableHead={columnNames}
        rowData={item}
        filterElement="id"
        tableElement={'loadInAction'}
        tableElementPosition={columnNames.length}
        setToggleCheckBox={checkItem}
      />
    </View>
  );
};

export default StockLoadInScreen;

const styles = StyleSheet.create({});
