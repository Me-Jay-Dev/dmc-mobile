import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {form} from '../../utils/styles';
import {height, scaleFont, width} from '../../utils/utils';
import CheckBox from '@react-native-community/checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTable = ({
  rowData = [],
  tableHead = [],
  filterElement = "",
  tableElement= "",
  setToggleCheckBox,
  tableElementPosition=0,
}) => {
  const actionPercentile =  tableElement === 'loadInAction' ? 20 : 0;
  const length = tableElement === 'loadInAction' ? tableHead.length-1 : tableHead.length
  const percentile = (100 - actionPercentile) / length;
  console.log("actionPercentile",actionPercentile)
  console.log("tableHead.length",tableHead.length-1)
  console.log("length",length)
  console.log("percentile",percentile)

  const element = (data, index, item) => (
    <View
      style={{
        ...styles.btn,
      }}>
      {tableElement === 'text' ? (
        <Text
          style={{
            // ...form.formLabel,
            fontSize:
              height >= width
                ? scaleFont(12)
                : height <= 400
                ? scaleFont(12)
                : scaleFont(16),
            color: data === 'Draft' ? 'green' : 'red',
            margin: 6,
            textAlign: 'center',
          }}>
          {data}
        </Text>
      ) : tableElement === 'checkbox' ? (
        <CheckBox
          disabled={false}
          value={item.select}
          onValueChange={newValue => {
            item.select = true;
            setToggleCheckBox(item);
          }}
          style={{margin: 6}}
        />
      ) : tableElement === 'Action' ? (
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            // alignItems: 'center',
            // width: 2000,
          }}>
          <TouchableOpacity
            onPress={() =>
              setToggleCheckBox({isOpen: true, category: 'delete'})
            }>
            <MaterialCommunityIcons
              name="close"
              color={'red'}
              size={25}
              style={{
                // lineHeight: horizontalScale(50),
                alignSelf: 'center',
                marginRight: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setToggleCheckBox({isOpen: true, category: 'edit'})}>
            <MaterialCommunityIcons
              name="file-document-edit-outline"
              color={'black'}
              size={25}
              style={{
                // lineHeight: horizontalScale(50),
                marginLeft: 5,
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        tableElement === 'loadInAction' && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              // width: 2000,
            }}>
           <TouchableOpacity
              onPress={() => null}
              style={{
                backgroundColor: 'skyblue',
                padding: 10,
                borderRadius: 10,
                marginRight: 5,
              }}>
              <Text
                style={{
                  // ...form.formLabel,
                  fontSize:
                    height >= width
                      ? scaleFont(12)
                      : height <= 400
                      ? scaleFont(12)
                      : scaleFont(16),
                  textAlign: 'center',
                }}>
                View
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => null}
              style={{
                backgroundColor: 'green',
                padding: 10,
                borderRadius: 10,
                marginRight: 5,
              }}>
              <Text
                style={{
                  // ...form.formLabel,
                  fontSize:
                    height >= width
                      ? scaleFont(12)
                      : height <= 400
                      ? scaleFont(12)
                      : scaleFont(16),
                  textAlign: 'center',
                }}>
                Accept
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => null}
              style={{
                backgroundColor: 'red',
                padding: 10,
                borderRadius: 10,
                marginRight: 5,
              }}>
              <Text
                style={{
                  // ...form.formLabel,
                  fontSize:
                    height >= width
                      ? scaleFont(12)
                      : height <= 400
                      ? scaleFont(12)
                      : scaleFont(16),
                  textAlign: 'center',
                }}>
                Reject
              </Text>
            </TouchableOpacity>
          </View>
        )
      )}
    </View>
  );

  return (
    <Table
      borderStyle={{borderColor: 'transparent'}}
      style={{width: '100%', height: '100%', flex: 1}}>
      {/* <ScrollView horizontal={true} style={{width: '100%', marginLeft: 20}}> */}
      {/* <Row
        data={tableHead}
        style={{...styles.head}}
        textStyle={styles.textHeader}
      /> */}
      <TableWrapper key = {1} style={styles.row}>
        {tableHead.map((key, i) => {
          console.log("tableHead",key)
          return (
            <Cell
              style={{
                overflow: 'hidden',
                width:
                key === 'Action' && tableElement === 'loadInAction'? `${actionPercentile}%` : `${percentile}%`,
              }}
              key={i}
              data={key}
              textStyle={{
                ...form.formLabel,
                fontSize:
                  height >= width
                    ? scaleFont(12)
                    : height <= 400
                    ? scaleFont(12)
                    : scaleFont(16),
                margin: 6,
                textAlign: 'center',
              }}
            />
          );
        })}
      </TableWrapper>

      {/* </ScrollView> */}
      <ScrollView style={{flex: 1}}>
        {rowData.map((item, index) => (
          <TableWrapper key={index} style={styles.row}>
            {Object.keys(item).map((key, subIndex) => {
              // console.log('key', key);
              return (
                <>
                  <Cell
                    style={{
                      overflow: 'hidden',
                      // height: '10%',
                      justifyContent: 'center',
                         width:
                key === filterElement && tableElement === 'loadInAction' ? `${actionPercentile}%` : `${percentile}%`,
                    }}
                    key={subIndex}
                    data={
                      key === filterElement
                        ? element(item[key], index, item)
                        : item[key]
                    }
                    textStyle={{
                      ...form.formLabel,
                      fontSize:
                        height >= width
                          ? scaleFont(12)
                          : height <= 400
                          ? scaleFont(12)
                          : scaleFont(16),
                      margin: 6,
                      textAlign: 'center',
                    }}
                  />
                </>
              );
            })}
          </TableWrapper>
        ))}
      </ScrollView>
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
});
