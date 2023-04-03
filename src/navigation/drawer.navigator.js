import {createDrawerNavigator} from '@react-navigation/drawer';
import {Appearance, Button, Text} from 'react-native';
// import {Button} from 'react-native-paper';
import HomeScreen from '../features/home/screens/home.screen';
// import TabBarIcon from '../components/appdrawer/TabBarIcon';
import TabBarIcon from '../components/appdrawer/TabBarIcon';
import {horizontalScale, scaleFont, width} from '../utils/utils';
import InventoryScreen from '../features/inventory/screens/inventory.screen';
import CustomMenu from '../components/menu/menu.component';
import CustomDrawer from '../components/appdrawer/CustomDrawer';
const Tabs = createDrawerNavigator();
const MainTabs = () => {
  const {isDarkmode} = Appearance.getColorScheme() === 'dark';
  return (
    <Tabs.Navigator
      initialRouteName={'Home'}
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : '#c0c0c0',
          backgroundColor: isDarkmode ? themeColor.dark200 : '#ffffff',
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-home-outline'} />
          ),
          // headerRight: () => (
          //   // <Button onPress={null} title="Info" text="sample" color="blue" />
          //   // <Button
          //   //   // icon="camera"
          //   //   mode="contained"
          //   //   onPress={null}
          //   //   labelStyle={{fontSize: scaleFont(20)}}
          //   //   style={{
          //   //     width: width * 0.25,
          //   //     padding: horizontalScale(10),
          //   //     backgroundColor: 'black',
          //   //   }}>
          //   //   Login
          //   // </Button>
          // ),
        }}
      />
      {/* <Tabs.Screen
        name="RCP"
        component={Profile}
        options={{
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-location-outline'} />
          ),
        }}
      /> */}
      {/* <Tabs.Screen
        name="Transaction"
        component={Profile}
        options={{
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-calculator-outline'} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="Inventory"
        component={InventoryScreen}
        options={({navigation}) => ({
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-folder-outline'} />
          ),
          headerRight: () => <CustomMenu isFrom="Inventory" />,
        })}
      />
      {/* <Tabs.Screen
        name="Remittance"
        component={Profile}
        options={{
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-cash-outline'} />
          ),
        }}
      /> */}
      {/* <Tabs.Screen
        name="Booking"
        component={Profile}
        options={{
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-clipboard-outline'} />
          ),
        }}
      /> */}
      {/* <Tabs.Screen
        name="S.I Delivery"
        component={Profile}
        options={{
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-airplane-outline'} />
          ),
        }}
      /> */}
      {/* <Tabs.Screen
        name="Reports"
        component={Profile}
        options={{
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-analytics-outline'} />
          ),
        }}
      /> */}
      {/* <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-settings-outline'} />
          ),
        }}
      />  */}
    </Tabs.Navigator>
  );
};

export default MainTabs;
