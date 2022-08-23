import React from 'react';
import CareTaker from '../screens/caretaker/Caretaker';
import Caretakercomp from '../screens/caretaker/CaretakerComp';
import Patientcomp from '../screens/patient/Patient';
import CustomHeader from '../components/customHeader';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';
import CameraScreen from '../screens/adherence/ClickSendImage';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

const DrawerNavigator = navigation => {
  const Drawer = createDrawerNavigator();
  const camFnc = () => {
    navigation.navigate('Camera');
  };
  const homeFnc = () => {
    return (
      <TouchableOpacity id="cam" onPress={camFnc}>
        <Icon name="camera" size={30} color="#3743ab" />
      </TouchableOpacity>
    );
  };
  const homeIcon = () => {
    return <Icon name="home" size={22} color="white" />;
  };
  const medIcon = () => {
    return <Icon color="white" size={20} name="medkit" />;
  };
  const userIcon = () => {
    <Icon size={22} color="white" name="user-md" />;
  };
  const settingIcon = () => {
    return <IonIcon size={22} color="white" name="settings" />;
  };
  const camIcon = () => {
    return <Icon size={20} color="white" name="camera" />;
  };
  const manIcon = () => {
    return <IonIcon size={22} color="white" name="man" />;
  };
  return (
    <Drawer.Navigator
      id="draw"
      initialRouteName="Home"
      screenOptions={{ headerTitleStyle: { color: 'black' } }}
      drawerContent={props => <CustomHeader {...props} />}>
      <Drawer.Screen
        name="Home"
        options={{
          headerRightContainerStyle: { marginRight: 15 },
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          headerRight: { homeFnc },
          drawerIcon: { homeIcon },
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Medicines"
        component={CareTaker}
        options={{
          title: 'Medicines',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          headerShown: true,
          drawerIcon: { medIcon },
        }}
      />
      <Drawer.Screen
        name="Patient"
        component={Patientcomp}
        options={{
          title: 'My Patient',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: { manIcon },
        }}
      />
      <Drawer.Screen
        options={{
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: { userIcon },
        }}
        name="My Caretaker"
        navig={this.navigation}
        component={Caretakercomp}
      />

      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: { settingIcon },
        }}
      />
      <Drawer.Screen
        name="Send Image"
        component={CameraScreen}
        options={{
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerIcon: { camIcon },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
