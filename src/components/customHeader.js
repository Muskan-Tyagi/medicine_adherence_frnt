import ProfileHeader from './ProfileHeader';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect,useState } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { Alert, View } from 'react-native';
import { Signout } from './caretaker/allIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './componentStyles/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Logger from './logger';
const CustomHeader = props => {

  useEffect(/* istanbul ignore next */() => {
    GoogleSignin.configure({
      webClientId:
        '526586885579-90t54t6rmkquqjct1819getnkstse41j.apps.googleusercontent.com',
    });
  });
  const [loggedIn, setLoggedIn] = useState(true);
  /* istanbul ignore next */
  async function getuser() {
    try {
      const isllooged = await GoogleSignin.isSignedIn();
      const checkforlogin = await AsyncStorage.getItem('user_id');

      Logger.loggerInfo(isllooged);

      if (checkforlogin !== null) {
        Logger.loggerInfo(isllooged);
        setLoggedIn(true);
        return;
      }

      setLoggedIn(false);
    } catch (err) { }
  }

  useEffect(/* istanbul ignore next */() => {
    return props.navigation.addListener('focus', () => {
      getuser();
    });
  }, [props.navigation]);

  useFocusEffect(/* istanbul ignore next */() => {
    Logger.loggerWarn('f');
    getuser();
  });
  const touchFnc = () => {
    props.navigation?.navigate('Profile')
  }
  async function signupFnc() {
    props.navigation?.navigate('Sign-up');
  }
  async function loginFnc() {
    props.navigation?.navigate('Login');
  }
  async function alertFnc() {
    {
      Alert.alert('Do you want to Logout?', '', [
        {
          text: 'Logout',
          onPress: async () => /* istanbul ignore next */ {
            await GoogleSignin.signOut();
            await AsyncStorage.setItem('bio', '-');
            await AsyncStorage.setItem('contact', '-');
            await AsyncStorage.setItem('age', '-');
            await AsyncStorage.setItem('weight', '-');
            await AsyncStorage.setItem('gender', '-');
            await AsyncStorage.setItem('maritalstatus', '-');
            await AsyncStorage.setItem('bloodgroup', '-');
            await AsyncStorage.setItem('user_id', '');
            await AsyncStorage.setItem('user_name', '');
            setLoggedIn(false);
          },
        },
        {
          text: 'Cancel',
          onPress: () => undefined,
        },
      ]);
    }
  }
  return (
    <>
      <SafeAreaProvider>
        <DrawerContentScrollView style={styles.drawer}>
          <TouchableOpacity
            style={styles.touch}
            id='touch'
            onPress={touchFnc}>
            {<ProfileHeader></ProfileHeader>}
          </TouchableOpacity>
          <DrawerItemList {...props}></DrawerItemList>

          <View style={styles.top}>
            {!loggedIn ? (
              <>
                <Button
                  id='signup'
                  iconPosition="right"
                  title="Sign up"
                  loading={false}
                  loadingProps={{ size: 'small', color: 'white' }}
                  buttonStyle={styles.button}
                  titleStyle={styles.buttonTitle}
                  containerStyle={styles.buttonContainer}
                  onPress={signupFnc}
                />
                <Button
                  iconPosition="right"
                  title="Login"
                  loading={false}
                  loadingProps={{ size: 'small', color: 'white' }}
                  buttonStyle={styles.button}
                  titleStyle={styles.buttonTitle}
                  containerStyle={styles.buttonContainer}
                  id='login'
                  onPress={{ loginFnc }}
                />
              </>
            ) : (
              <Button
                title="Logout"
                iconPosition="right"
                icon={Signout()}
                buttonStyle={styles.button}
                titleStyle={styles.buttonLogOutTitle}
                containerStyle={styles.buttonContainer}
                id='alert'
                onPress={alertFnc}></Button>
            )}
          </View>
        </DrawerContentScrollView>
      </SafeAreaProvider>
    </>
  );
};

export default CustomHeader;
