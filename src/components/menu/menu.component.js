import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomMenu = ({isFrom}) => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity
            onPress={openMenu}
            style={{flex: 1, justifyContent: 'center', padding: 10}}>
            <MaterialCommunityIcons name="dots-vertical" size={24} />
          </TouchableOpacity>
        }>
        <MenuItem
          isFrom={isFrom}
          navigation={navigation}
          closeMenu={closeMenu}
        />
      </Menu>
    </View>
  );
};

const MenuItem = ({isFrom, closeMenu, navigation}) => {
  if (isFrom === 'Inventory') {
    return (
      <>
        {isFrom === 'Inventory'}
        <Menu.Item
          onPress={() => {
            navigation.navigate('StockItemList', {isStockTransfer: false});
            closeMenu();
          }}
          title="Stock Request"
        />
        <Menu.Item
          onPress={() => {
            navigation.navigate('StockItemList', {isStockTransfer: true});
            closeMenu();
          }}
          title="Stock Transfer"
        />
        <Menu.Item onPress={() => {}} title="Physical Count" />
      </>
    );
  }
  return (
    <>
      {isFrom === 'Inventory'}
      <Menu.Item onPress={() => {}} title="Stock Load-In" />
      <Menu.Item
        onPress={() => {
          navigation.navigate('LoadOut', {screen: 'StockLoadOut'});
          closeMenu();
        }}
        title="Stock Load-Out"
      />
      <Menu.Item onPress={() => {}} title="Panel Transfer" />
    </>
  );
};
export default CustomMenu;
