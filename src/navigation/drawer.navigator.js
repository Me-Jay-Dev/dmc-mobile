import {createDrawerNavigator} from '@react-navigation/drawer';
import {Appearance, Button, Text, TouchableOpacity} from 'react-native';
import HomeScreen from '../features/home/screens/home.screen';
import TabBarIcon from '../components/appdrawer/TabBarIcon';
import InventoryScreen from '../features/inventory/screens/inventory.screen';
import CustomMenu from '../components/menu/menu.component';
import CustomDrawer from '../components/appdrawer/CustomDrawer';
import RcpScreen from '../features/rcp/screens/rcp.screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {form} from '../utils/styles';

const Tabs = createDrawerNavigator();
const MainTabs = () => {
  const {isDarkmode} = Appearance.getColorScheme() === 'dark';
  return (
    <Tabs.Navigator
      initialRouteName={'Home'}
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: '#f8f8f8',
        },
        
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#f8f8f8',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: '500',
          },
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-home-outline'} />
          ),
          // headerRight: () => (
          //   // <Button onPress={null} title="Info" text="sample" color="blue" />
          //   // <Button
          //   //   // icon="camera"
          //   //   mode="contained"
          //   //   onPress={null}
          //   //   labelStyle={{fontSize: scaleFont(15)}}
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
      <Tabs.Screen
        name="RCP"
        component={RcpScreen}
        options={{
          headerStyle: {
            backgroundColor: '#f8f8f8',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: '500',
          },
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-location-outline'} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={null}
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 5,
                marginRight: 10,
                borderRadius: 20,
              }}>
              <MaterialCommunityIcons
                name="walk"
                size={24}
                style={{color: 'black'}}
              />
              <Text style={{...form.formLabel, color: '#00000'}}>Walk In</Text>
            </TouchableOpacity>
          ),
        }}
      />
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
          headerStyle: {
            backgroundColor: '#f8f8f8',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '500',
          },
          drawerIcon: ({focused, size}) => (
            <TabBarIcon focused={focused} icon={'md-folder-outline'} color='black'/>
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
