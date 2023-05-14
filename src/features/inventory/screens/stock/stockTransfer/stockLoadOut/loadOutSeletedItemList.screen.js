import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {form, globalStyles} from '../../../../../../utils/styles';
import CustomTable from '../../../../../../components/customTable/customTable.component';
import CustomModal from '../../../../../../components/modal/modal.component';
import {
  height,
  horizontalScale,
  scaleFont,
  width,
} from '../../../../../../utils/utils';
import DataForm from '../../../../components/DataForm.component';

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
const columnNames = ['Action', 'Description', 'Type', 'UOM', 'Qty'];
const LoadOutSelectedItemListSreen = ({navigation}) => {
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
      <View style={{flexDirection: 'row', flex: 1, width: '100%'}}>
        <DataForm />
        <CustomTable
          tableHead={columnNames}
          rowData={tableData}
          tableElement="Action"
          filterElement="id"
          setToggleCheckBox={openModal}
        />
      </View>
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} category={category} />
    </View>
  );
};

export default LoadOutSelectedItemListSreen;


