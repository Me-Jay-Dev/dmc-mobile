import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';
import {form, globalStyles} from '../../../../../utils/styles';
import Search from '../../../../../components/search/search.component';
import CustomTable from '../../../../../components/customTable/customTable.component';
import {useIsFocused} from '@react-navigation/native';

const StockRequestScreen = () => {
  const tableData = [
    {
      id: 1,
      productCode: '480088168373',
      tag_name: 'HBR250G',
      description: '1Happy Booster Hotdog Regular ',
      badQty: 2,
      goodQty: 2,
      totalQty: 4,
      select: false,
    },
    {
      id: 2,
      productCode: '480088168373',
      tag_name: 'HBR250G',
      description: '2Happy Booster Hotdog Regular ',
      badQty: 2,
      goodQty: 2,
      totalQty: 4,
      select: false,
    },
    {
      id: 3,
      productCode: '480088168373',
      tag_name: 'HBR250G',
      description: '3Happy Booster Hotdog Regular ',
      badQty: 2,
      goodQty: 2,
      totalQty: 4,
      select: false,
    },
    {
      id: 4,
      productCode: '480088168373',
      tag_name: 'HBR250G',
      description: '4Happy Booster Hotdog Regular ',
      badQty: 2,
      goodQty: 2,
      totalQty: 4,
      select: false,
    },
    {
      id: 5,
      productCode: '480088168373',
      tag_name: 'HBR250G',
      description: '5Happy Booster Hotdog Regular ',
      badQty: 2,
      goodQty: 2,
      totalQty: 4,
      select: false,
    },
    {
      id: 6,
      productCode: '480088168373',
      tag_name: 'HBR250G',
      description: '6Happy Booster Hotdog Regular ',
      badQty: 2,
      goodQty: 2,
      totalQty: 4,
      select: false,
    },
    {
      id: 7,
      productCode: '480088168373',
      tag_name: 'HBR250G',
      description: '7Happy Booster Hotdog Regular ',
      badQty: 2,
      goodQty: 2,
      totalQty: 4,
      select: false,
    },
  ];

  const columnNames = [
    'Select',
    'Product Code',
    'Tag Name',
    'Description',
    'Bad Qty',
    'Good Qty',
    'Total Qty',
  ];
  const isFocused = useIsFocused();
  const [text, setText] = useState('');
  const [item, setItem] = useState(tableData);
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    // setItem(tableData);
    console.log("SELECTEDITEM",selectedItem)
    searchDescription(text)
  }, [setSelectedItem,selectedItem]);
  
  useEffect(() => {
    setItem(tableData);
    setSelectedItem([])
  }, [isFocused]);
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

  const searchDescription = searchText => {
    console.log("selectedItem",selectedItem)

    let selectedItems = selectedItem;

    const updatedTableData = tableData
      .map(item => {
        const selectedItemFound = selectedItems.find(
          selected => selected.id === item.id,
        );
        if (selectedItemFound && item.description.includes(searchText)) {
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
      })
      .filter(item => item.description.includes(searchText));
    setItem(updatedTableData);
    console.log("selectedItem1",selectedItem)

  };
  return (
    <View
      style={{
        ...globalStyles.tableContainer,
      }}>
      <Search
        setText={setText}
        text={text}
        searchDescription={searchDescription}
        selectedItem={selectedItem}
      />

      <CustomTable
        tableHead={columnNames}
        rowData={item}
        filterElement="id"
        tableElement={'checkbox'}
        setToggleCheckBox={checkItem}
      />
    
    </View>
  );
};

export default StockRequestScreen;

const styles = StyleSheet.create({});
