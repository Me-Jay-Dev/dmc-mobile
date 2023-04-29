import React, {useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
} from 'react-native';
import moment from 'moment';
import FilterData from '../../../../components/filter/filter.component';
import CustomTable from '../../../../components/customTable/customTable.component';
import {height, width} from '../../../../utils/utils';
import {sortByData} from '../../../../utils/hooks/data.hooks';
import {globalStyles} from '../../../../utils/styles';

const tableHead = ['Status', 'Date', 'Transaction No.', 'Σ SKU', 'Σ QTY'];
const tableData = [
  {
    Status: 'submitted',
    date: '08-03-2009',
    transactionNo: 'SR152355624864',
    sku: '4.0',
    qty: '453',
  },
  {
    Status: 'submitted',
    date: '08-03-1999',
    transactionNo: 'SR152355624865',
    sku: '4.0',
    qty: '453',
  },
  {
    Status: 'submitted',
    date: '08-03-2020',
    transactionNo: 'SR152355624866',
    sku: '4.0',
    qty: '453',
  },
  {
    Status: 'submitted',
    date: '08-03-2012',
    transactionNo: 'SR152355624867',
    sku: '4.0',
    qty: '453',
  },
  {
    Status: 'submitted',
    date: '08-03-2011',
    transactionNo: 'SR152355624868',
    sku: '4.0',
    qty: '453',
  },
  {
    Status: 'submitted',
    date: '08-03-2017',
    transactionNo: 'SR152355624861',
    sku: '4.0',
    qty: '453',
  },
  {
    Status: 'submitted',
    date: '08-03-2018',
    transactionNo: 'SR152355624869',
    sku: '4.0',
    qty: '453',
  },
  {
    Status: 'submitted',
    date: '09-03-2013',
    transactionNo: 'SR152355624863',
    sku: '4.0',
    qty: '453',
  },
  {
    Status: 'submitted',
    date: '09-05-2013',
    transactionNo: 'SR152355624863',
    sku: '4.0',
    qty: '453',
  },
  {
    Status: 'submitted',
    date: '04-06-2023',
    transactionNo: 'SR152355624863',
    sku: '4.0',
    qty: '453',
  },
  {
    Status: 'submitted',
    date: '06-04-2023',
    transactionNo: 'SR152355624863',
    sku: '4.0',
    qty: '453',
  },
];

// const widthArr = [
//   width * 0.2,
//   width * 0.2,
//   width * 0.2,
//   width * 0.2,
//   width * 0.2,
// ];

const StockRequestScreen = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 2);
  const [dateFrom, setDateFrom] = useState(currentDate);
  const [dateTo, setDateTo] = useState(new Date());
  const [type, setType] = useState('date');
  const [rowData, setRowData] = useState(tableData);
  const [ascending, setAscending] = useState('ascending');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  useEffect(() => {
    const startDate = moment(dateFrom, 'MM-DD-YYYY');
    const endDate = moment(dateTo, 'MM-DD-YYYY');
    startDate.startOf('hour').toDate().toISOString();
    endDate.startOf('hour').toDate().toISOString();
    const filteredDates = tableData.filter(data => {
      const date = moment(data.date, 'MM-DD-YYYY');
      date.startOf('hour').toDate().toISOString();
      return date.isSameOrAfter(startDate) && date.isSameOrBefore(endDate);
    });

    const data = sortByData({
      type: type,
      isAscending: ascending,
      data: filteredDates,
    });
    setRowData(data);
  }, [dateFrom, dateTo, ascending, type]);

  return (
    <View
      style={{
        ...globalStyles.tableContainer,
        backgroundColor: 'rgb(249,249,249)',
      }}>
      <FilterData
        setDateFrom={setDateFrom}
        setDateTo={setDateTo}
        dateTo={dateTo}
        dateFrom={dateFrom}
        setType={setType}
        setAscending={setAscending}
        type={type}
        ascending={ascending}
      />
      <CustomTable
        tableHead={tableHead}
        rowData={rowData}
        filterElement="Status"
        tableElement={'text'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height <= 400 ? height * 0.5 : height * 0.52,
  },
});

export default StockRequestScreen;
